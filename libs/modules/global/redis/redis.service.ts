import { InjectRedis, Redis } from '@nestjs-modules/ioredis';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RedisService {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  async set(key: string, data: any, expireTime = 60): Promise<'OK'> {
    return this.redis.set(key, data, 'EX', expireTime);
  }

  async get(key: string) {
    return this.redis.get(key);
  }

  async hset(key: string, fields: string, value: string | number) {
    return this.redis.hset(key, fields, value);
  }

  async hget(key: string, fields: string) {
    return this.redis.hget(key, fields);
  }

  async hgetall(key: string) {
    return this.redis.hgetall(key);
  }

  async expire(key: string, expireTime: number) {
    return this.redis.expire(key, expireTime);
  }

  async delete(key: string) {
    return this.redis.del(key);
  }

  async ttl(key: string) {
    return this.redis.ttl(key);
  }

  async incr(key: string) {
    return this.redis.incr(key);
  }

  async del(key: string) {
    return this.redis.del(key);
  }
}
