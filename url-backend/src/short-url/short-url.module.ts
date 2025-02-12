import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShortUrl } from './short-url.entity';
import { ShortUrlService } from './short-url.service';
import { ShortUrlController } from './short-url.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ShortUrl])],
  providers: [ShortUrlService],
  controllers: [ShortUrlController],
  exports: [ShortUrlService],
})
export class ShortUrlModule {}
