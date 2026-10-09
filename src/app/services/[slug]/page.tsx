import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DetailLayout, DraftBlock } from "@/components/detail-layout";
import { services } from "@/data/portfolio";

export const metadata: Metadata = { title: "Services | Jorgilla Fernandez", description: "Explore virtual assistant support areas from Jorgilla Fernandez." };
export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return <DetailLayout eyebrow={`SERVICE ${service.number} · DRAFT DETAILS`} title={service.title} description="This service page is a starting point. Confirm the tasks and scope so it reflects the support Jorgilla Fernandez actually offers.">
    <div className="detail-content">
      <div className="service-detail-intro"><p>EXAMPLE SERVICE AREA · CONFIRM BEFORE PUBLISHING</p><h2>Thoughtful help with the details that keep things moving.</h2><span>Use this page to explain the support you provide and what a client can expect.</span></div>
      <div className="service-detail-grid"><section><span className="detail-overline">POSSIBLE TASKS</span><ul className="detail-task-list">{service.items.map((item) => <li key={item}><span aria-hidden="true">✳</span>{item}</li>)}</ul><p className="detail-small-note">These tasks are examples. Replace or remove any that do not match your services.</p></section><aside><DraftBlock label="WHO THIS HELPS" text="Describe the type of client or business that benefits most from this service." /><DraftBlock label="HOW WE WORK" text="Add the tools, communication style, and scope you offer for these tasks." /></aside></div>
      <DraftBlock label="WHAT TO SEND TO COMPLETE THIS PAGE" text="Your confirmed task list, what is included or excluded, relevant tools, preferred client type, and any process details clients should know." />
      <div className="detail-actions"><Link className="button button-plum" href="/#contact">Ask about this support <span aria-hidden="true">↗</span></Link><Link className="underlined-link" href="/#services">Back to services <span aria-hidden="true">↗</span></Link></div>
    </div>
  </DetailLayout>;
}
