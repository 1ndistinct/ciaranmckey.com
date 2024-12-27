"use client";

import { Navigation } from "../components/nav";
import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import Link from "next/link";

const STACK = [
    "Python",
    "FastAPI",
    "Golang",
    "TypeScript",
    "JavaScript",
    "PostgreSql",
    "Redis",
    "Git",
    "Linux",
    "GitLab CI",
    "GitHub Actions",
    "AWS S3",
    "AWS IAM",
    "AWS CloudFormation",
    "AWS Lambda",
    "AWS Route53",
    "AWS SNS",
    "AWS SQS",
    "AWS DynamoDB",
    "AWS RDS",
    "AWS EKS",
    "AWS ECS",
    "AWS CloudTrail",
    "Kubernetes",
    "Docker",
    "FluxCD",
    "ArgoCD",
    "Terraform",
    "Helm",
];

export default function About() {
    return (
        <div className="bg-gradient-to-tl from-background/0 via-background to-background/0">
            <Navigation />
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <Card className="max-w-4xl mx-auto border-none shadow-none">
                    <CardHeader className="text-center">
                        <div className="flex justify-center mb-4">
                            <Avatar className="w-32 h-32">
                                <AvatarImage src="/images/me.jpg" alt="Profile picture" />
                                <AvatarFallback>CM</AvatarFallback>
                            </Avatar>
                        </div>
                        <CardTitle className="text-3xl font-bold">Ciaran McKey</CardTitle>
                        <CardDescription className="text-xl">Engineering Lead</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <section className="mb-8 flex flex-col gap-4">
                            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
                            <p className="text-muted-foreground">
                                Hello 👋, I'm Ciaran, an Engineering Lead at {" "}
                                <Link
                                    href="https://www.darktrace.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline decoration-primary underline-offset-4 hover:text-primary transition-colors"
                                >
                                    Darktrace
                                </Link>
                                , I started my journey as a software engineer building and launching {" "}
                                <Link
                                    href="/projects/darktrace-cloud"
                                    className="underline decoration-primary underline-offset-4 hover:text-primary transition-colors"
                                >
                                    Darktrace /CLOUD
                                </Link>
                                . Since then I have been given a team with the MO of helping to modernise our tech stack. 
                                This means deploying more of our applications in highly distributed environments, 
                                with microservice based architectures. 
                                It also means bringing disparate services across the company which aim to solve the same problem, 
                                redesigning and implementing better multi-product and multi-tenant versions of these services to bring 
                                a unified view to our customers.
                            </p>
                            <p className="text-muted-foreground">
                                I love learning and building my skills in my free time. 
                                You can find some featured projects I've worked on to expand my technical skills on 
                                the{" "}
                                <Link
                                    href="/projects"
                                    className="underline decoration-primary underline-offset-4 hover:text-primary transition-colors"
                                >
                                    projects
                                </Link>{" "}
                                page.
                            </p>
                            <p className="text-muted-foreground">
                                Lets not neglect the soft skills since they are an important aspect of being an engineer and manager.
                                I devote a good portion of my time reading books and watching content to help improve my abilities as a manager. 
                                Some of my favorite books that I have read as of late include.
                            </p>
                            <p className="text-muted-foreground">
                                <ul>
                                    <li>- Diary Of a CEO - Stephen Bartlett</li>
                                    <li>- Lean Startup - Eric Ries</li>
                                    <li>- Zero to One - Peter Thiel</li>
                                    <li>- The One Thing - Gary Keller & Jay Papasan</li>
                                    <li>- Surrounded by Idiots - Thomas Erikson</li>
                                    <li>- The Chimp Paradox - Prof Steve Peters</li>
                                    <li>- The Subtle Art of Not Giving a F*ck - Mark Manson</li>
                                    <li>- Think like a Monk - Jay Shetty</li>
                                    <li>- How to do the Work - Dr Nicole LePera</li>
                                </ul>
                            </p>
                            <p className="text-muted-foreground">
                                Outside of coding, I spend my time hiking, bouldering, snow boarding and travelling.
                            </p>
                        </section>
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Stack</h2>
                            <div className="flex flex-wrap gap-2">
                                {STACK.map((skill) => (
                                    <Badge key={skill} variant="secondary">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </section>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
