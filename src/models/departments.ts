import { Table, Column, Model, HasMany, DataType } from 'sequelize-typescript'
// import { DataType } from 'sequelize/types'

@Table({
    timestamps: true,
    tableName:"depatments"
  })


export class Departments extends Model {
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    autoIncrement:true,
    primaryKey: true
  })
  id!: Number;

 @Column({
    type: DataType.STRING,
    allowNull: false
  })
  department_name!: string;

}