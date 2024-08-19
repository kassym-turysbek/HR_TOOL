module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: "skilltest",
            host: "localhost",
            user: "postgres",
            password: "12345"
        },
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds',
        },
        pool: {
            min: 2,
            max: 10
        }
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds',
        },
    },
};