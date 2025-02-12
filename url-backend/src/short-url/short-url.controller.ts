import { Controller, Post, Get, Delete, Body, Param, Res } from '@nestjs/common';
import { ShortUrlService } from './short-url.service';
import { Response } from 'express';

@Controller()
export class ShortUrlController {
    constructor(private readonly shortUrlService: ShortUrlService) { }

    @Post('shorten')
    async shorten(@Body() body: { originalUrl: string; alias?: string }) {
        return this.shortUrlService.createShortUrl(body.originalUrl, body.alias);
    }

    @Get(':shortUrl')
    async redirect(@Param('shortUrl') shortUrl: string, @Res() res: Response) {
        const originalUrl = await this.shortUrlService.getOriginalUrl(shortUrl);
        return res.redirect(originalUrl);
    }

    @Get('info/:shortUrl')
    async getInfo(@Param('shortUrl') shortUrl: string) {
        return this.shortUrlService.getInfo(shortUrl);
    }

    @Delete('delete/:shortUrl')
    async delete(@Param('shortUrl') shortUrl: string) {
        return this.shortUrlService.deleteShortUrl(shortUrl);
    }
}
