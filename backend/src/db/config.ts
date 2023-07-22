import { Sequelize } from 'sequelize-typescript';

const connection = new Sequelize({
  dialect: 'mysql',
  host: 'db',//'localhost',
  // port: 3306,
  username: 'root',
  password: '123456',
  database: 'lojavirtual',
  logging: false,
});

export default connection;
