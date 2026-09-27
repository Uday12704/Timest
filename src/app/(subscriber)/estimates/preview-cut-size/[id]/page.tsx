import { PreviewCutSizePage } from "@/features/estimate/pages/preview-cut-size-page";

interface PreviewCutSizeRouteProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PreviewCutSizeRoute({
  params,
}: PreviewCutSizeRouteProps) {
  const { id } = await params;

  return <PreviewCutSizePage id={id} />;
}