/* eslint-disable */

import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export default class URL extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  url!: string;
}
