import { AboutContent } from "@/components/sub/about-content";

export const About = () => {
  return (
    <section
      id="about-me"
      className="relative flex flex-col items-center justify-center py-20 w-full"
    >
      {/* Section heading */}
      <div className="flex flex-col items-center mb-14">
        <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          About Me
        </h2>
        <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mt-2" />
      </div>

      <AboutContent />
    </section>
  );
};
