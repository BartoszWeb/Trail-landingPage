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
import { isMobile } from "react-device-detect";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
    const allSections = useRef();
    
    useEffect(() => {
        const sections = Array.from(allSections.current.children);
        
        sections.splice(0, 2);
        sections.pop();
        
        if (window.innerWidth > 700) {
            sections.forEach(section => {
                gsap.fromTo(section, { y: "100", opacity: 0, }, {
                    y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "easeInOut", scrollTrigger: {
                        trigger: section,
                        start: "top 90%",
                    }
                });
            });
        }
    }, []);
    
    return (
        <div ref={ allSections }>
            <SignSection/>
            { isMobile && <HeroAnimation/> }
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