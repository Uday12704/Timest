export type SubscriptionStatus =
  | "active"
  | "expiring"
  | "expired";

export interface Subscription {
  accountId: string;

  planName: string;

  startDate: string;
  expiryDate: string;

  status: SubscriptionStatus;

  createdAt: string;
  updatedAt: string;
}

export interface SubscriberPayment {
  accountId: string;
  amountReceived: number;
  paymentMethod: string;
  receivedAt: string;
  updatedAt: string;
}

export interface SubscriberManagement {
  accountId: string;
  lastUpdatedBy: string;
  lastUpdatedAt: string;
}