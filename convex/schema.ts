import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  entries: defineTable({
    caption: v.string(),
    rating: v.float64(),
    title: v.string(),
    storageId: v.string(),
  }),
});
