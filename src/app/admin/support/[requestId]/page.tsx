import AdminSupportDetailsPage from "@/features/admin/pages/admin-support-details-page";

interface AdminSupportDetailsRouteProps {
  params: Promise<{
    requestId: string;
  }>;
}

export default async function AdminSupportDetailsRoute({
  params,
}: AdminSupportDetailsRouteProps) {
  const { requestId } = await params;

  return (
    <AdminSupportDetailsPage requestId={requestId} />
  );
}