import { PreviewCustomEstimatePage } from "@/features/estimate/pages/preview-custom-page";


interface PreviewCustomEstimateRouteProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PreviewCustomEstimateRoute({
  params,
}: PreviewCustomEstimateRouteProps) {
  const { id } = await params;

  return <PreviewCustomEstimatePage id={id} />;
}