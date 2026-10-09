import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DetailLayout, DraftBlock } from "@/components/detail-layout";
import { supportOptions } from "@/data/portfolio";

export const metadata: Metadata = { title: "Ways to Work Together | Elaina Julia Madrid", description: "Draft engagement details for working with Elaina Julia Madrid." };
export function generateStaticParams() { return supportOptions.map(({ slug }) => ({ slug })); }

export default async function WaysToWorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const option = supportOptions.find((item) => item.slug === slug);
  if (!option) notFound();

  return <DetailLayout eyebrow={`${option.label} · DRAFT`} title={option.title} description="A draft engagement page. Add your actual scope, availability, and pricing before sharing this option with clients.">
    <div className="detail-content">
      <div className="engagement-summary"><p>ENGAGEMENT DETAILS TO ADD</p><h2>Clear expectations make a good partnership.</h2><span>This page can explain what is included, how the arrangement works, and how to get started.</span></div>
      <div className="engagement-grid"><DraftBlock label="SCOPE" text="List the work included and any limits or exclusions." /><DraftBlock label="HOURS & RHYTHM" text="Add hours, availability, response times, and any minimum commitment." /><DraftBlock label="INVESTMENT" text="Add your rate or package price, billing cycle, and payment terms when ready." /></div>
      <div className="detail-notes"><span>WHAT TO SEND TO COMPLETE THIS PAGE</span><p>Confirm whether you offer this arrangement, then send scope, hours, rate, availability, commitment, and any onboarding details.</p></div>
      <div className="detail-actions"><Link className="button button-plum" href="/#contact">Ask about this option <span aria-hidden="true">↗</span></Link><Link className="underlined-link" href="/#ways">Back to ways to work <span aria-hidden="true">↗</span></Link></div>
    </div>
  </DetailLayout>;
}
