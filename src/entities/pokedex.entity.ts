import { PokedexItemType } from 'src/modules/pokedex/types/pokedex.type';
import { Entity, Column, Generated, PrimaryColumn, Index } from 'typeorm';

@Entity({ name: 'pokedex' })
@Index(['pokemonName', 'idUser'], { unique: true })
export class PokedexEntity implements PokedexItemType {
  @PrimaryColumn()
  @Generated('uuid')
  id: number;

  @Column()
  pokemonName: string;

  @Column({ type: 'uuid' })
  idUser: string;
}
