import {
  Table,
  Column,
  PrimaryKey,
  Model,
  AutoIncrement
} from "sequelize-typescript";

@Table({
  tableName: "UsuarioTipo"
})
export default class UsuarioTipo extends Model<UsuarioTipo> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  nome: string;
}
