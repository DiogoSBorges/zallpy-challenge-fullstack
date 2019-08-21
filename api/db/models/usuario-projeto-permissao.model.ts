import {
  Table,
  ForeignKey,
  Column,
  PrimaryKey,
  Model,
  AutoIncrement
} from "sequelize-typescript";
import UsuarioModel from "./../models/usuario.model";
import ProjetoModel from "./../models/projeto.model";

@Table({
  tableName: "UsuarioProjetoPermissao"
})
export default class UsuarioProjetoPermissao extends Model<
  UsuarioProjetoPermissao
> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => UsuarioModel)
  @Column({ unique: "UK_USUARIO_PROJETO_PERMISSAO" })
  usuarioId: number;

  @ForeignKey(() => ProjetoModel)
  @Column({ unique: "UK_USUARIO_PROJETO_PERMISSAO" })
  projetoId: number;
}
