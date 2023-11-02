import { PokedexType } from 'src/modules/pokedex/types/Pokedex.type';
import { Entity, Column, Generated, PrimaryColumn, Index } from 'typeorm';

@Entity({ name: 'pokedex' })
@Index(['pokemonId', 'idUser'], { unique: true })
export class PokedexEntity implements PokedexType {
  @PrimaryColumn()
  @Generated('uuid')
  id: number;

  @Column()
  pokemonId: number;

  @Column({ type: 'uuid' })
  idUser: string;
}
