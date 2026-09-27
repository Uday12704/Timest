import { DeliveryChecklistDetailPage } from "@/features/delivery-checklist/pages/delivery-checklist-detail-page";

interface DeliveryChecklistDetailRouteProps {
  params: Promise<{
    type: string;
    id: string;
  }>;
}

export default async function DeliveryChecklistDetailRoute({
  params,
}: DeliveryChecklistDetailRouteProps) {
  const { type, id } = await params;

  return (
    <DeliveryChecklistDetailPage
      type={type}
      id={id}
    />
  );
}