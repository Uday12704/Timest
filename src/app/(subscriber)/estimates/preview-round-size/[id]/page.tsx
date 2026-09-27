import { PreviewRoundSizePage } from "@/features/estimate/pages/preview-round-size-page";


interface PreviewRoundSizeRouteProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PreviewRoundSizeRoute({
  params,
}: PreviewRoundSizeRouteProps) {
  const { id } = await params;

  return <PreviewRoundSizePage id={id} />;
}