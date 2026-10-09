import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailLayout, DraftBlock } from "@/components/detail-layout";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = { title: "Selected Work | Elaina Julia Madrid", description: "A case study draft from Elaina Julia Madrid’s virtual assistant portfolio." };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return <DetailLayout eyebrow={`${project.category} · CASE STUDY DRAFT`} title={project.title} description="A dedicated project page draft. Replace the sample content with an approved client story and work images when ready.">
    <div className="detail-content">
      <div className={`detail-image-placeholder ${project.tone}`} role="img" aria-label="Placeholder for a project image"><span className="detail-image-mark">{project.mark}</span><span className="detail-image-orbit" /><span className="detail-image-shape" /><div><strong>PROJECT IMAGE</strong><small>ADD AN APPROVED SCREENSHOT OR VISUAL</small></div></div>
      <div className="detail-meta-grid"><DraftBlock label="THE CONTEXT" text="Add a short, shareable introduction to the client or project. You may use an industry description instead of a client name." /><DraftBlock label="THE CHALLENGE" text="Describe the client's need or the problem this project set out to solve." /><DraftBlock label="THE SUPPORT" text="List the work you personally completed, your role, and any relevant tools or process." /><DraftBlock label="THE OUTCOME" text="Add a real result, improvement, or client-approved takeaway. Avoid estimates unless clearly identified." /></div>
      <div className="detail-notes"><span>WHAT TO SEND TO COMPLETE THIS PAGE</span><p>Project context, challenge, your contribution, outcome, and any screenshots or visuals you have permission to publish. Remove private client data before sharing.</p></div>
      <div className="detail-actions"><a className="button button-plum" href="/#contact">Discuss working together <span aria-hidden="true">↗</span></a><a className="underlined-link" href="/#work">Back to selected work <span aria-hidden="true">↗</span></a></div>
    </div>
  </DetailLayout>;
}
