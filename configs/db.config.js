module.exports = {
  DB_NAME: "notification_db",
  DB_URL: process.env.MONGODB_URI || "mongod://localhost/notification_db",
};
