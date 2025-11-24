import { DataTypes } from "sequelize";

export default (sequelize) => {
  const TransactionRegistery = sequelize.define("TransactionRegistery", {
    // -------------------------------------------
    // Primary Identification
    // -------------------------------------------
    orderId: {
      type: DataTypes.STRING,
    },


    transactionId: { type: DataTypes.STRING, primaryKey: true },
    // ntarTransactionId: { type: DataTypes.STRING },
    referenceId: { type: DataTypes.STRING },

    // -------------------------------------------
    // User Information
    // -------------------------------------------
    userId: { type: DataTypes.STRING },
    userName: { type: DataTypes.STRING },
    mobileNumber: { type: DataTypes.STRING },
    customerMobileNumber: { type: DataTypes.STRING },
    // userType: { type: DataTypes.STRING },
    // businessSize: { type: DataTypes.STRING },
    referredBy: { type: DataTypes.STRING },

    // -------------------------------------------
    // Transaction Metadata
    // -------------------------------------------
    transactionType: { type: DataTypes.STRING },
    // transactionTime: { type: DataTypes.STRING },
    // transactionDate: { type: DataTypes.STRING },
    tnxDateTime: { type: DataTypes.STRING },
    // timeAndDate: { type: DataTypes.STRING },
    // academicYear: { type: DataTypes.STRING },
   

    // -------------------------------------------
    // Amount Details
    // -------------------------------------------
    actualAmount: { type: DataTypes.FLOAT },
    amount: { type: DataTypes.FLOAT },
    amountInPaisa: { type: DataTypes.FLOAT },
    walletAmount: { type: DataTypes.FLOAT },
    walletAmountWithoutCharges: { type: DataTypes.FLOAT },
    finalPayableAmount: { type: DataTypes.FLOAT },
    commissionAmount: { type: DataTypes.FLOAT },

    // Charges
    payOutChargedAmount: { type: DataTypes.FLOAT },
    payInChargedAmount: { type: DataTypes.FLOAT },
    totalGateWayAmount: { type: DataTypes.FLOAT },
    chargedAmount: { type: DataTypes.FLOAT },
    finalPaidAmount: { type: DataTypes.FLOAT },

    payInProcessingFee: { type: DataTypes.FLOAT },
    payInProcessingPercentage: { type: DataTypes.FLOAT },
    payOutProcessingFee: { type: DataTypes.FLOAT },
    payOutProcessingPercentage: { type: DataTypes.FLOAT },
    payInCommissionAmount: { type: DataTypes.FLOAT },
    payInCommissionAmount: { type: DataTypes.FLOAT },
    totalCommissionAmount: { type: DataTypes.FLOAT },

    // -------------------------------------------
    // Wallet Details
    // -------------------------------------------
    walletSettlementRequired: { type: DataTypes.STRING },
    walletPreviousBalance: { type: DataTypes.FLOAT },
    walletUpdatedBalance: { type: DataTypes.FLOAT },

    // -------------------------------------------
    // Beneficiary Details
    // -------------------------------------------
    beneficiaryName: { type: DataTypes.STRING },
    beneficiaryPan: { type: DataTypes.STRING },
    beneficiaryAccountNumber: { type: DataTypes.STRING },
    beneficiaryIfscCode: { type: DataTypes.STRING },
    serviceType: { type: DataTypes.STRING },
    serviceName: { type: DataTypes.STRING },
    subService: { type: DataTypes.STRING },

    // -------------------------------------------
    // Pay-In Details
    // -------------------------------------------
    payInStatus: { type: DataTypes.STRING },
    payInRequired: { type: DataTypes.BOOLEAN },
    payInGateway: { type: DataTypes.STRING }, // Deduped
    payInGatewayCode: { type: DataTypes.STRING }, // Deduped
    paymentMode: { type: DataTypes.STRING },
    paymentMethod: { type: DataTypes.STRING },
    paymentType: { type: DataTypes.STRING },
    paymentSource: { type: DataTypes.STRING },
    bankCode: { type: DataTypes.STRING },
    bankName: { type: DataTypes.STRING },
 

    payinInitiatedTime: { type: DataTypes.STRING },
    payinSettledTime: { type: DataTypes.STRING },

    // Credit Card
    creditCardNumber: { type: DataTypes.STRING },
    creditCardType: { type: DataTypes.STRING },
    creditCardLastdigits: { type: DataTypes.STRING },

    // -------------------------------------------
    // Pay-Out Details
    // -------------------------------------------
    payOutStatus: { type: DataTypes.STRING }, // unified
    payOutTransactionId: { type: DataTypes.STRING },
    payOutReferenceId: { type: DataTypes.STRING },
    payOutUTRNo: { type: DataTypes.STRING },
    payOutGateway: { type: DataTypes.STRING },
    payOutGatewayCode: { type: DataTypes.STRING },

    payOutInitiatedTimeDate: { type: DataTypes.STRING },
    payOutProcessingStateTime: { type: DataTypes.STRING },
    payOutSettledTime: { type: DataTypes.STRING },

    // -------------------------------------------
    // Settlement Details
    // -------------------------------------------
    settlementTime: { type: DataTypes.STRING },
    settlementType: { type: DataTypes.STRING },
    settlementDate: { type: DataTypes.STRING },

    // -------------------------------------------
    // Account Details
    // -------------------------------------------
    contactId: { type: DataTypes.STRING },
    fundAccountId: { type: DataTypes.STRING },

    // -------------------------------------------
    // Status & Notes
    // -------------------------------------------
    status: {
      type: DataTypes.STRING,
    },
    notes: { type: DataTypes.JSONB },
    failureReason: { type: DataTypes.STRING },
    failureMessage: { type: DataTypes.STRING },

    // -------------------------------------------
    // Location & Device Info
    // -------------------------------------------
    latitude: { type: DataTypes.STRING },
    longitude: { type: DataTypes.STRING },
    ipAddress: { type: DataTypes.STRING },

    // -------------------------------------------
    // Misc
    // -------------------------------------------



  });

  return TransactionRegistery;
};

// "userType": null,
// "businessSize": null,
// "referredBy": null,
// "academicYear": null,
// "purpose": null,
// "narration": null,

// ??
// transactionType
// walletAmountWithoutCharges
// finalPayableAmount
// totalGateWayAmount
// chargedAmount
// finalPaidAmount
// paymentSource
