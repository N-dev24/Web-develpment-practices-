import { Table, Model, Column, CreatedAt, UpdatedAt, DataType, HasMany } from 'sequelize-typescript'; 
import { Optional } from 'sequelize'; 
import { Usuario } from './Usuario';


interface EmpresaAttributes { 
  id: number; 
  nombre: string; 
  contacto: string; 
  ubicacion: string; 
} 


interface EmpresaCreationAttributes extends Optional<EmpresaAttributes, 'id'> {} 


@Table({ 
  tableName: "Empresas" 
}) 
export class Empresa extends Model<EmpresaAttributes, EmpresaCreationAttributes> { 

  @Column 
  nombre!: string; 

  @Column 
  contacto!: string; 

  @Column 
  ubicacion!: string; 

  @HasMany ( () => Usuario)
  usuarios!: Usuario[];

  @CreatedAt 
  @Column 
  createdAt!: Date; 

  @UpdatedAt 
  @Column 
  updatedAt!: Date; 
}