import { About } from "@/components/main/about";
import { Contact } from "@/components/main/contact";
import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { ProjectsShowcase } from "@/components/main/projects";
import { Services } from "@/components/main/services";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <ProjectsShowcase />
        <Encryption />
        <Services />
        <Contact />
      </div>
    </main>
  );
}
