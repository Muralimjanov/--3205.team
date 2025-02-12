import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShortUrl } from './short-url.entity';
import { nanoid } from 'nanoid';

@Injectable()
export class ShortUrlService {
    constructor(
        @InjectRepository(ShortUrl)
        private shortUrlRepository: Repository<ShortUrl>,
    ) { }

    async createShortUrl(originalUrl: string, alias?: string, expiresAt?: Date) {
        const shortUrl = alias || nanoid(6);
        const newUrl = this.shortUrlRepository.create({ originalUrl, shortUrl, alias, expiresAt });
        return this.shortUrlRepository.save(newUrl);
    }

    async getOriginalUrl(shortUrl: string) {
        const url = await this.shortUrlRepository.findOne({ where: { shortUrl } });
        if (!url) throw new NotFoundException('Short URL not found');
        url.clickCount++;
        await this.shortUrlRepository.save(url);
        return url.originalUrl;
    }

    async getInfo(shortUrl: string) {
        const url = await this.shortUrlRepository.findOne({ where: { shortUrl } });
        if (!url) throw new NotFoundException('Short URL not found');
        return url;
    }

    async deleteShortUrl(shortUrl: string) {
        return this.shortUrlRepository.delete({ shortUrl });
    }
}
