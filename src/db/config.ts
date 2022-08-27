import Connection from 'mysql2/typings/mysql/lib/Connection';
import { Sequelize } from 'sequelize-typescript'
import { Departments } from '../models/departments';

const connection = new Sequelize({
  database: 'sample',
  dialect: 'mysql',
  username: 'root',
  password: 'mysql',
  storage: ':memory:',
  logging: false,
  models: [Departments] 
})

export default connection;