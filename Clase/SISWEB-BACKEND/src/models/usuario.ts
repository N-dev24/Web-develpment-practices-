import { Table, Model, Column, CreatedAt, UpdatedAt, ForeignKey, BelongsTo } from 'sequelize-typescript'; 
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

    @Column 
    nombre!: string;

    @Column 
    email!: string;

    @ForeignKey( () => Empresa)
    @Column
    empresaId!: Empresa;

    @BelongsTo(() => Empresa)
    empresa!: Empresa;

    @CreatedAt 
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

}