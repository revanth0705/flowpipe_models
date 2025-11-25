// src/models/index.js

import BbpsTransaction from "./bbpsTransaction.model.js";
import TransactionRegistery from "./transactionRegistery.model.js";

export function loadModels(sequelize) {
  return {
    BbpsTransaction: BbpsTransaction(sequelize),
    TransactionRegistery: TransactionRegistery(sequelize),
  };
}

// Export raw model definitions so users can import them directly
export const Models = {
  BbpsTransaction,
  TransactionRegistery,
};
