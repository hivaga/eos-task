export type UniqueID = string;

export type Debtor = {
  workUnitId: string,
  name: string
}

export type Case =  {"workUnitId": UniqueID,
  "package": string,
  "status": number
}

export type Unit = {
  debtors?: Debtor[], others?: any[], cases?: Case[], workUnitId: UniqueID, bailiffName: string
};
