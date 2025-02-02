import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";
import Comments from "@/app/components/comments";

export const revalidate = 60;

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

const redis = Redis.fromEnv();
export async function generateStaticParams(): Promise<Props["params"][]> {
    return allProjects
        .filter((p) => p.published)
        .map((p) =>
            Promise.resolve({
                slug: p.slug,
            })
        );
}

export default async function PostPage(props: Props) {
    const params = await props.params;
    const slug = params?.slug;
    const project = allProjects.find((project) => project.slug === slug);

    if (!project) {
        notFound();
    }

    const views = (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

    return (
        <div className="bg-zinc-50 min-h-screen">
            <Header project={project} views={views} />
            <ReportView slug={project.slug} />

            <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
                <Mdx code={project.body.code} />
            </article>
            <Comments repositoryName={project.repositoryName} repositoryId={project.repositoryId} />
        </div>
    );
}
