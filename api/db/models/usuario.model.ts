import {
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
  Unique,
  Model
} from "sequelize-typescript";

import UsuarioTipo  from "./usuario-tipo.model";

@Table({
  tableName: "Usuario"
})
export default class Usuario extends Model<Usuario> {
  @PrimaryKey
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
