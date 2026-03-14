import { BackgroundPaths } from "@/components/ui/background-paths";
import Hero from "@/components/landing/Hero";
import WorkflowPipeline from "@/components/landing/WorkflowPipeline";
import BentoFeatures from "@/components/landing/BentoFeatures";
import StatsMarquee from "@/components/landing/StatsMarquee";
import CTASection from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden">
        {/* Animated background paths layer */}
        <div className="absolute inset-0 z-0">
          <BackgroundPaths title="" />
        </div>

        {/* Hero content on top */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-8 pt-10 sm:px-24 pb-32">
          <Hero />
        </div>
      </main>

      {/* Sections below hero */}
      <WorkflowPipeline />
      <StatsMarquee />
      <BentoFeatures />
      <CTASection />
      <Footer />
    </div>
  );
}

