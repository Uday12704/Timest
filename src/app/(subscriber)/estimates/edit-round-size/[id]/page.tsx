import { EditRoundSizeEstimatePage } from "@/features/estimate/pages/edit-round-size-estimate-page";

interface EditRoundSizeRouteProps {
  params: Promise<{ id: string }>;
}

export default async function EditRoundSizeRoute({
  params,
}: EditRoundSizeRouteProps) {
  const { id } = await params;

  return <EditRoundSizeEstimatePage id={id} />;
}