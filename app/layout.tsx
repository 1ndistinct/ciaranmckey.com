import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import "../global.css";
import { ThemeProvider } from "@/app/components/providers/theme-provider";
import NavigationProgress from "./components/navigation-progress";

export const metadata: Metadata = {
    title: {
        default: "ciaranmckey.com",
        template: "%s | ciaranmckey.com",
    },
    description: "My personal website.",
    openGraph: {
        title: "ciaranmckey.com",
        description: "My personal website.",
        url: "https://ciaranmckey.com",
        siteName: "ciaranmckey.com",
        images: [
            {
                url: "https://ciaranmckey.com/og.png",
                width: 1920,
                height: 1080,
            },
        ],
        locale: "en-US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        shortcut: "/favicon.png",
    },
};
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const calSans = localFont({
    src: "../public/fonts/CalSans-SemiBold.ttf",
    variable: "--font-calsans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={[inter.variable, calSans.variable].join(" ")} suppressHydrationWarning>
            <head>
                <Analytics />
            </head>
            <body className={`bg-background ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <NavigationProgress />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
