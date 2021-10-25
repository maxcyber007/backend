module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '49.229.108.165:8888'),
        port: env.int('DATABASE_PORT', 3308),
        database: env('DATABASE_NAME', 'backend'),
        username: env('DATABASE_USERNAME', 'backend'),
        password: env('DATABASE_PASSWORD', 'iVaWK_gyKEEYqmXL'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
