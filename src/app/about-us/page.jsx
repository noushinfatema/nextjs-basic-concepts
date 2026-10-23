"use client" ;
import AboutClient from "@/components/AboutClient";

const AboutUsPage = () => {
    console.log("This page is from server") ;
    return (
        <div className="flex flex-col flex-1 justify-center items-center font-bold text-5xl">
            <h2>This is about us page.</h2>
            
            <AboutClient/>
        </div>
    );
};

export default AboutUsPage;