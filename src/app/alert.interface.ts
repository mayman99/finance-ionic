export interface alertresponse {
  Status: string;
  result: alert[][];
}
interface alert {
  AlertID: number;
  UserID: number;
  Code: string;
  Type: Type;
  Field: Field;
  Criteria: Criteria;
  Value: number;
  SetTime: string;
  MetTime: string;
  Note: string;
  Viewed: boolean;
  IsMatched: boolean;
  LastUpdated: string;
  IsDeleted: boolean;
  DoubleValue: number;
}
enum Type {
  AlertStockTypeIndex = 1,
  AlertStockTypeStock = 2,
  AlertStockTypeOTC = 3
}
enum Field {
  AlertFieldLastTrade = 1,
  AlertFieldNetChange = 2,
  AlertFieldPercentageChange = 3,
  AlertFieldVWAP = 4,
  AlertFieldBestBid = 5,
  AlertFieldBestAsk = 6,
  AlertFieldBidSize = 7,
  AlertFieldAskSize = 8,
  AlertFieldVolume = 9,
  AlertFieldTurnOver = 10,
  AlertFieldTransactions = 11,
  AlertFieldHigh = 12,
  AlertFieldLow = 13,
  AlertFieldTotalBidSize = 14,
  AlertFieldTotalAskSize = 15,
  AlertFieldValue = 16,
  AlertFieldIntradayHigh = 17,
  AlertFieldIntradayLow = 18
}
enum Criteria {
  AlertCriteriaLessThan = 1,
  AlertCriteriaEqual = 2,
  AlertCriteriaGreaterThan = 3
}
