import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { DialogAnimationSection } from "../components/organisms/DialogAnimationSection/DialogAnimationSection";
import { GraphSection } from "../components/organisms/GraphSection/GraphSection";
import { SignSection } from "../components/organisms/SignSection/SignSection";
import { HeroAnimation } from "../components/organisms/HeroAnimation/HeroAnimation";
import { UseCaseSection } from "../components/organisms/UseCaseSection/UseCaseSection";
import { TeamSection } from "../components/organisms/TeamSection/TeamSection";
import { BlogSection } from "../components/organisms/BlogSection/BlogSection";
import { Footer } from "../components/organisms/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
    const allSections = useRef();
    
    useEffect(() => {
        if (window.innerHeight < 800) return;
        
        if (window.innerWidth > 800) {
            const sections = Array.from(allSections.current.children);
            sections.splice(0, 2);
            sections.pop();
            sections.forEach(section => {
                gsap.fromTo(section, { y: "100", opacity: 0.5, }, {
                    y: 0, opacity: 1, stagger: 0.2, duration: 1.3, ease: "easeInOut", scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                    }
                });
            });
        }
    }, []);
    
    return (
        <div ref={ allSections }>
            <SignSection/>
            <HeroAnimation/>
            <DialogAnimationSection/>
            <GraphSection/>
            <UseCaseSection/>
            <TeamSection/>
            <BlogSection/>
            <Footer/>
        </div>
    );
}

export default HomePage;