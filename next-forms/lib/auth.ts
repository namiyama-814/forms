import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { UpstashRedisAdapter } from "@auth/upstash-redis-adapter";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!
})

const authConfig: NextAuthConfig = {
  providers: [Google],
  adapter: UpstashRedisAdapter(redis),
}

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
