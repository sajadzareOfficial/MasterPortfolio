import AboveTheFold from "./components/AboveTheFold";
import CoreCapabilities from "./components/CoreCapabilities";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Comments from "./components/Comments";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
export default function SiteMain() {
    return (
        <main class="flex-col-center mt-10 relative  gap-10 ">
            <AboveTheFold/>
            <div class="languagePrograming-Box light:**:text-light__text light:bg-light-blue/40 md:w-full overflow-hidden h-auto bg-white/20  opacity-70 hover:opacity-100 transition-opacity
            grid md:grid-cols-1 grid-cols-2  p-5 content-around  gap-y-3   grid-rows-1     w-full
            
            ">

                <Languages Value="TailwindCss" ImgSrc="tailwindcss"/>
                <Languages Value="Asp.net" ImgSrc="dotnet-tile"/>
                
            </div>
            <CoreCapabilities />
                      
            <Projects/>
            <Comments/>
            <Experience/>
           <Contact/>
        </main>
    )
}