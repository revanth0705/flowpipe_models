// src/models/index.js

import BbpsTransaction from "./BbpsTransaction.js";
import TransactionRegistery from "./transactionRegistery.model.js";

export default function loadModels(sequelize) {
  const models = {};

  models.BbpsTransaction = BbpsTransaction(sequelize);
  models.TransactionRegistery = TransactionRegistery(sequelize);

  return models;
}
