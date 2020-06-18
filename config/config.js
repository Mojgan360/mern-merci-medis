const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "nnnnnnn",
  mongoUri:
    process.env.MONGODB_URI ||
    "mongodb+srv://merciapp:tomas@cluster0-f2afz.mongodb.net/merciapp?retryWrites=true&w=majority" ||
    process.env.MONGO_HOST ||
    "mongodb://" +
      (process.env.IP || "localhost") +
      ":" +
      (process.env.MONGO_PORT || "27017") +
      "/mernproject",
};

export default config;
