import { Table, Column, Model, HasMany, DataType, Length } from 'sequelize-typescript'
// import { DataType } from 'sequelize/types'
const { sequelizeJoi, Joi } = require("sequelize-joi");

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


@Length({ min: 3 })
 @Column({
    type: DataType.STRING,
    allowNull: false,
    
   
  })
  department_name!: string;

}