// import { mutation } from "./_generated/server";

// import { useUser } from "@clerk/clerk-react";
// import { useConvexAuth } from "convex/react";
// import { useEffect, useState } from "react";
// import { useMutation } from "convex/react";
// import { api } from "../convex/_generated/api";
// import { Id } from "../convex/_generated/dataModel";

// export default function useStoreUserEffect() {
//   const { isAuthenticated } = useConvexAuth();
//   const { user } = useUser();

//   const [userId, setUserId] = useState<Id<"users"> | null>(null);
//   const storeUser = useMutation(api.users.store);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       return;
//     }
//     async function createUser() {
//       const id = await storeUser();
//       setUserId(id);
//     }
//     createUser();
//     return () => setUserId(null);
//   }, [isAuthenticated, storeUser, user?.id]);
//   return userId;
// }

// export const store = mutation({
//   args: {},
//   handler: async (ctx) => {
//     const identity = await ctx.auth.getUserIdentity();
//     if (!identity) {
//       throw new Error("Called storeUser without authentication present");
//     }

//     const user = await ctx.db
//       .query("users")
//       .withIndex("by_token", (q) =>
//         q.eq("tokenIdentifier", identity.tokenIdentifier)
//       )
//       .unique();

//     if (user !== null) {
//       if (user.name !== identity.name) {
//         await ctx.db.patch(user._id, { name: identity.name });
//       }
//       return user._id;
//     }

//     return await ctx.db.insert("users", {
//       name: identity.name!,
//       tokenIdentifier: identity.tokenIdentifier,
//     });
//   },
// });

// export const myMutation = mutation({
//   args: {
//     // ...
//   },
//   handler: async (ctx, args) => {
//     const identity = await ctx.auth.getUserIdentity();
//     const { tokenIdentifier, name, email } = identity!;
//     //...
//   },
// });
