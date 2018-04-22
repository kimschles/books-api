module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:/kims_library'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
