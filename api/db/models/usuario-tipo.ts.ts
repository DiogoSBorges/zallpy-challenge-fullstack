import { Table, Column, PrimaryKey, Model } from "sequelize-typescript";

@Table({
    tableName: "UsuarioTipo"
})
export default class UsuarioTipo extends Model<UsuarioTipo> {
    
    @PrimaryKey
    @Column    
    id: number ;

    @Column    
    nome: string ;
}
