import type { SubscriberPayment } from "./types";

const STORAGE_KEY = "wood-calc-subscriber-payments";

function readPayments(): SubscriberPayment[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function savePayments(payments: SubscriberPayment[]) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(payments),
  );
}

export function getSubscriberPayment(
  accountId: string,
): SubscriberPayment | null {
  const payments = readPayments();

  return (
    payments.find(
      (payment) => payment.accountId === accountId,
    ) ?? null
  );
}

export function saveSubscriberPayment(
  accountId: string,
  data: Omit<
    SubscriberPayment,
    "accountId" | "updatedAt"
  >,
): SubscriberPayment {
  const payments = readPayments();

  const existingIndex = payments.findIndex(
    (payment) => payment.accountId === accountId,
  );

  const payment: SubscriberPayment = {
    accountId,
    ...data,
    updatedAt: new Date().toISOString(),
  };

  if (existingIndex >= 0) {
    payments[existingIndex] = payment;
  } else {
    payments.push(payment);
  }

  savePayments(payments);

  return payment;
}

export function deleteSubscriberPayment(
  accountId: string,
) {
  const payments = readPayments().filter(
    (payment) => payment.accountId !== accountId,
  );

  savePayments(payments);
}