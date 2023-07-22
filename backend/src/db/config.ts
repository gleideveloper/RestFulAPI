import { Sequelize } from 'sequelize-typescript';

const connection = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3320,
  username: 'root',
  password: '123456',
  database: 'lojavirtual',
  logging: false,
});

export default connection;
