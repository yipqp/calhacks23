import { query } from "./_generated/server";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addEntry = mutation({
  args: {
    title: v.string(),
    rating: v.number(),
    caption: v.string(),
    storageId: v.string(),
  },

  handler: async (ctx, args) => {
    const entry = {
      title: args.title,
      rating: args.rating,
      caption: args.caption,
      storageId: args.storageId,
    };

    const entryID = await ctx.db.insert("entries", entry);
    return entryID;
  },
});

export const queryEntries = query({
  handler: async (ctx) => {
    const entries = await ctx.db.query("entries").collect();
    return Promise.all(
      entries.map(async (entry) => {
        const url = await ctx.storage.getUrl(entry.storageId);
        return url
          ? { ...entry, ...{ photoURL: url } }
          : { ...entry, ...{ photoURL: "blank.jpg" } };
      })
    );
  },
});

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});
