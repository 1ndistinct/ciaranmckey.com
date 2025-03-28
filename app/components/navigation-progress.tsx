"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

export default function NavigationProgress() {
    return (
        <Suspense>
            <ProgressBar />
        </Suspense>
    );
}

export function ProgressBar() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const handleStart = () => {
            NProgress.start();
        };

        const handleStop = () => {
            NProgress.done();
        };

        // Add event listeners for navigation start
        document.addEventListener("click", (e) => {
            const target = e.target as HTMLElement;
            const link = target.closest("a");
            if (link?.href) {
                // Check if it's a file download
                if (link.hasAttribute("download")) {
                    handleStart();
                    // For downloads, we need to manually trigger stop after a delay
                    setTimeout(handleStop, 1000);
                }
                // Check if it's an internal navigation
                else if (!link.target && link.href.startsWith(window.location.origin)) {
                    handleStart();
                }
            }
        });

        // Cleanup on route change
        return () => {
            handleStop();
        };
    }, [pathname, searchParams]);

    return null;
}
