import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'postgres',
  port: 5432,
  database: 'zallpy',
  username: 'zallpy',
  password: 'zallpy',
  models: [__dirname + '/models']
});