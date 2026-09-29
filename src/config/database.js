import "dotenv/config";

module.exports = {
  dialect: "postgres",
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
