import { db } from './db';
import { publicProcedure, router } from './trpc';
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { z } from "zod";

export const appRouter = router({
  commentBySlug: publicProcedure
    .input(z.string())
    .query(async (opts) => {
      const { input } = opts;
      const comments = await db.comments.findMany({
        where: {
          blog: input
        }
      });
      return comments;
    }),

/*   commentCreate: publicProcedure
    .input(z.object({ data: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      const comments = await db.comments.create(input);
      return comments;
    }), */
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3010);