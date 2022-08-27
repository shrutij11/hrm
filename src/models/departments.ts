import { Table, Column, Model, HasMany, DataType } from 'sequelize-typescript'
// import { DataType } from 'sequelize/types'

@Table({
    timestamps: true,
    tableName:"depatments"
  })
export class Departments extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name!: string;

 @Column({
    type: DataType.STRING,
    allowNull: false
  })
  department_name!: string;

}