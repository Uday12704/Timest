import { EditCustomEstimatePage } from "@/features/estimate/pages/edit-custom-estimate-page";


interface EditCustomEstimateRouteProps {
  params: Promise<{ id: string }>;
}

export default async function EditCustomEstimateRoute({
  params,
}: EditCustomEstimateRouteProps) {
  const { id } = await params;

  return <EditCustomEstimatePage id={id} />;
}