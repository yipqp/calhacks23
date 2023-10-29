import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  entries: defineTable({
    caption: v.string(),
    rating: v.float64(),
    title: v.string(),
    storageId: v.string(),
    userId: v.string(),
  }).index("by_userId", ["userId"]),

  users: defineTable({
    user: v.string(),
    email: v.string(),
    tokenIdentifier: v.string(),
  }).index("by_token", ["tokenIdentifier"]),
});
