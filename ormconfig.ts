module.exports = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ['modules/**/*.entity{.ts,.js}'],
    seeds: ['database/seeders/**/*{.ts,.js}'],
    factories: ['database/factories/**/*{.ts,.js}']
};
