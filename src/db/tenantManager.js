// src/db/tenantManager.js
import { Sequelize } from "sequelize";
import loadModels from "../models/index.js";

const connectionCache = {};

export default async function getTenantConnection(tenantId, dbLink) {
  if (!tenantId) throw new Error("tenantId is required");
  if (!dbLink) throw new Error("dbLink is required");

  if (connectionCache[tenantId]) {
    return connectionCache[tenantId];
  }

  const sequelize = new Sequelize(dbLink, {
    dialect: "postgres",
    logging: false,
    pool: {
      max: 5,
      min: 1,
      idle: 10000,
    },
  });

  await sequelize.authenticate();

  const models = loadModels(sequelize);

  await sequelize.sync();

  console.log(`🔗 New DB connection established for tenant: ${tenantId}`);

  connectionCache[tenantId] = {
    sequelize,
    models,
    tenantId,
    dbLink,
  };

  return connectionCache[tenantId];
}
