import type { SubscriberManagement } from "./types";

const STORAGE_KEY = "wood-calc-subscriber-management";

function readManagementRecords(): SubscriberManagement[] {
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

function saveManagementRecords(
  records: SubscriberManagement[],
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(records),
  );
}

export function getSubscriberManagement(
  accountId: string,
): SubscriberManagement | null {
  const records = readManagementRecords();

  return (
    records.find(
      (record) => record.accountId === accountId,
    ) ?? null
  );
}

export function saveSubscriberManagement(
  accountId: string,
  data: {
    lastUpdatedBy: string;
  },
): SubscriberManagement {
  const records = readManagementRecords();

  const management: SubscriberManagement = {
    accountId,
    lastUpdatedBy: data.lastUpdatedBy,
    lastUpdatedAt: new Date().toISOString(),
  };

  const existingIndex = records.findIndex(
    (record) => record.accountId === accountId,
  );

  if (existingIndex >= 0) {
    records[existingIndex] = management;
  } else {
    records.push(management);
  }

  saveManagementRecords(records);

  return management;
}

export function deleteSubscriberManagement(
  accountId: string,
) {
  const records = readManagementRecords().filter(
    (record) => record.accountId !== accountId,
  );

  saveManagementRecords(records);
}