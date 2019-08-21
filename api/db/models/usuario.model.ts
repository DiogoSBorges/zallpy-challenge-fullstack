import {
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
  Unique,
  Model,
  AutoIncrement
} from "sequelize-typescript";

import UsuarioTipo  from "./usuario-tipo.model";

@Table({
  tableName: "Usuario"
})
export default class Usuario extends Model<Usuario> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  nome: string;

  @Unique
  @Column
  email: string;

  @Column
  senha: string;

  @ForeignKey(() => UsuarioTipo)
  @Column
  tipoId: number;
}
