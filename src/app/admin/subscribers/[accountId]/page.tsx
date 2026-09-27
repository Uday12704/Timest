import AdminSubscriberDetailsPage from "@/features/admin/pages/admin-subscriber-details-page";

interface AdminSubscriberDetailsRouteProps {
  params: Promise<{
    accountId: string;
  }>;
}

export default async function AdminSubscriberDetailsRoute({
  params,
}: AdminSubscriberDetailsRouteProps) {
  const { accountId } = await params;

  return (
    <AdminSubscriberDetailsPage
      accountId={accountId}
    />
  );
}