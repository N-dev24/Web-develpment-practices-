
import { Table, Model, Column, CreatedAt, UpdatedAt, DataType } from 'sequelize-typescript'; 
import { Optional } from 'sequelize'; 

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

  @CreatedAt 
  @Column 
  createdAt!: Date; 

  @UpdatedAt 
  @Column 
  updatedAt!: Date; 
}