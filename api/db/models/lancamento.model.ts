import { Table, ForeignKey, Column, PrimaryKey, Model, AutoIncrement} from "sequelize-typescript";
import UsuarioModel from './usuario.model';
import ProjetoModel from './projeto.model';

@Table({
    tableName: "Lancamento"
})
export default class UsuarioProjetoPermissao extends Model<UsuarioProjetoPermissao> {
    @PrimaryKey
    @AutoIncrement
    @Column    
    id: number ;

    @ForeignKey(() => UsuarioModel)   
    @Column
    usuarioId: number ;

    @ForeignKey(() => ProjetoModel) 
    @Column
    projetoId: number ;

    @ForeignKey(() => ProjetoModel) 
    @Column
    data: Date ;

    @Column
    horas: number ;
}