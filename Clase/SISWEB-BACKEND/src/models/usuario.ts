import { Table, Model, Column, CreatedAt, UpdatedAt, ForeignKey, BelongsTo, DataType } from 'sequelize-typescript'; 
import { EmptyResultError, Optional } from 'sequelize'; 
import { Empresa } from './empresa';
import { Interface } from 'node:readline';

interface UsuarioAttributes { 
  id: number; 
  nombre: string; 
  email: string; 
  empresaId: number; // <-- Llave foranea
}

interface UsuarioCreationAttributes extends Optional<UsuarioAttributes, 'id'> {}

@Table ({
    tableName: "Usuarios"
})

export class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> {
    
    @Column({ type: DataType.STRING }) 
    nombre!: string; 
    
    @Column({ type: DataType.STRING }) 
    email!: string; 
    
    @ForeignKey(() => Empresa)
    @Column({ type: DataType.INTEGER }) 
    empresaId!: number;

    @BelongsTo(() => Empresa)
    empresa!: Empresa;

    @CreatedAt 
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

}