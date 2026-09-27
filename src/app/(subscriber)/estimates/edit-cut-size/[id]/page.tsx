import { EditCutSizeEstimatePage } from "@/features/estimate/pages/edit-cut-size-estimate-page";

interface EditCutSizeRouteProps {
  params: Promise<{ id: string }>;
}

export default async function EditCutSizeRoute({
  params,
}: EditCutSizeRouteProps) {
  const { id } = await params;

  return <EditCutSizeEstimatePage id={id} />;
}