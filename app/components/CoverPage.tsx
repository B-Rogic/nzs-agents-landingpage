'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { usePathname, useRouter } from 'next/navigation'

const CoverPage = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname();
    const curtainRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const isTransitioning = useRef(false);
    const isFirstLoad = useRef(true);

    // 1. ENTRY & BACK BUTTON HANDLING
    useEffect(() => {
        // Skip on initial site load
        if (isFirstLoad.current) {
            isFirstLoad.current = false;
            gsap.set(contentRef.current, { opacity: 1, y: 0 });
            return;
        }

        // This timeline runs every time the pathname changes (including back button)
        const tl = gsap.timeline({
            onComplete: () => {
                gsap.set(curtainRef.current, { height: "0%", yPercent: 0 });
                isTransitioning.current = false;
            }
        });

        // If the curtain isn't already covering the screen (like during a back button press),
        // we snap it to 100% height instantly so we can slide it DOWN to reveal.
        if (parseFloat(gsap.getProperty(curtainRef.current, "height") as string) === 0) {
            tl.set(curtainRef.current, { height: "100%", yPercent: 0 });
        }

        tl.fromTo(contentRef.current, 
            { y: -30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
        )
        .to(curtainRef.current, {
            yPercent: 100,
            duration: 0.8,
            ease: "expo.inOut"
        }, "<");

    }, [pathname]);

    // 2. EXIT ANIMATION (For clicks)
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('a');
            const href = target?.getAttribute('href');

            if (href && href.startsWith('/') && !href.includes('#') && !isTransitioning.current) {
                const url = new URL(href, window.location.origin).pathname;
                
                if (url !== pathname) {
                    e.preventDefault();
                    e.stopPropagation(); 
                    isTransitioning.current = true;
                    
                    const tl = gsap.timeline({
                        onComplete: () => router.push(url)
                    });

                    tl.set(curtainRef.current, { yPercent: 0, height: "0%" })
                      .to(curtainRef.current, {
                        height: "100%",
                        duration: 0.5,
                        ease: "power4.inOut"
                    })
                    .to(contentRef.current, {
                        y: 50,
                        opacity: 0,
                        duration: 0.2,
                        ease: "power2.in"
                    }, "<");
                }
            }
        };

        document.addEventListener('click', handleClick, true);
        return () => document.removeEventListener('click', handleClick, true);
    }, [pathname, router]);

    return (
        <>
            <div 
                ref={curtainRef} 
                className='fixed top-0 left-0 bg-white z-[9999] w-full h-0 pointer-events-none'
            />
            <div ref={contentRef} className="relative will-change-transform opacity-0">
                {children}
            </div>
        </>
    )
}

export default CoverPage;