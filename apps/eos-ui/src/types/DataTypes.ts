export type UniqueID = string;

export type Debtor = {
  workUnitId: UniqueID,
  name: string
}

export type Case =  {
  "workUnitId": UniqueID,
  "debtor": string,
  "date": string,
  "package": string,
  "boughtAmount": {
    "amount": number,
    "currency": string
  },
  "paidAmount": {
    "amount": number,
    "currency": string
  },
  "dueAmount": {
    "amount": number,
    "currency": string
  }
}

export type Address = {
  "id": UniqueID,
  "settlementName": string,
  "zipCode": string,
  "address": string,
  "dateAdded": string;
}

export type Unit = {
  debtors?: Debtor[], others?: any[], cases?: Case[], workUnitId: UniqueID, bailiffName: string
};
