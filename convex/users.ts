import { mutation } from "./_generated/server";

import { useAuth, useUser } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { useEffect, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { Id } from "../convex/_generated/dataModel";

export default function useStoreUserEffect() {
  const { isAuthenticated } = useConvexAuth();
  const { user, isLoaded } = useUser();

  const [userId, setUserId] = useState<Id<"users"> | null>(null);
  const storeUser = useMutation(api.users.store);

  useEffect(() => {
    user?.reload();
    console.log("auth status" + isAuthenticated);
    if (!isAuthenticated) {
      return;
    }
    async function createUser() {
      const id = await storeUser();
      setUserId(id);
    }
    createUser();
    return () => setUserId(null);
  }, [isAuthenticated, storeUser, user?.id]);
  return userId;
}

export const store = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Called storeUser without authentication present");
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();

    if (user !== null) {
      if (user.user !== identity.name) {
        await ctx.db.patch(user._id, { user: identity.name });
      }
      if (user.email !== identity.email) {
        await ctx.db.patch(user._id, { email: identity.email });
      }
      return user._id;
    }

    return await ctx.db.insert("users", {
      user: identity.name!,
      email: identity.email!,
      tokenIdentifier: identity.tokenIdentifier,
    });
  },
});

// export const getUserID = mutation({
//   handler: async (ctx) => {
//     const identity = await ctx.auth.getUserIdentity();
//     const { tokenIdentifier, name, email } = identity!;
//     //...
//   },
// });
