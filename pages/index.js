import { useRef, useEffect, useState } from "react";


import { DialogAnimationSection } from "../components/organisms/DialogAnimationSection/DialogAnimationSection";
import { GraphSection } from "../components/organisms/GraphSection/GraphSection";
import { SignSection } from "../components/organisms/SignSection/SignSection";
import { HeroAnimation } from "../components/organisms/HeroAnimation/HeroAnimation";
import { UseCaseSection } from "../components/organisms/UseCaseSection/UseCaseSection";
import { TeamSection } from "../components/organisms/TeamSection/TeamSection";
import { BlogSection } from "../components/organisms/BlogSection/BlogSection";
import { Footer } from "../components/organisms/Footer/Footer";



function HomePage() {
    const allSections = useRef();

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