import { Repository } from 'typeorm';
import { ShortUrl } from './short-url.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ShortUrlRepository extends Repository<ShortUrl> {
    constructor(@InjectRepository(ShortUrl) repository: Repository<ShortUrl>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}
