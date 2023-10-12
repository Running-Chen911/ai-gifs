import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
})

// Create a new ratelimiter, that allows 50 / 3 hours
export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(50, '3 h'),
  analytics: false,
  prefix: '@upstash/ratelimit',
})
