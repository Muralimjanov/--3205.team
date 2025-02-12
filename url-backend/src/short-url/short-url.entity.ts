import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class ShortUrl {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    originalUrl: string;

    @Column({ unique: true })
    shortUrl: string;

    @Column({ nullable: true })
    alias?: string;

    @Column({ nullable: true })
    expiresAt?: Date;

    @CreateDateColumn()
    createdAt: Date;

    @Column({ default: 0 })
    clickCount: number;
}
