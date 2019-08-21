import { Table, Column, PrimaryKey, Model, AutoIncrement } from "sequelize-typescript";

@Table({
    tableName: "Projeto"
})
export default class Projeto extends Model<Projeto>{
    @PrimaryKey
    @AutoIncrement
    @Column    
    id: number ;

    @Column    
    nome: string ;

}