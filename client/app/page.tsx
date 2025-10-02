import {
  Header,
  Footer,
  HeroSection,
  FocusStatsSection,
  ProductivitySection,
  DepartmentsSection,
  TestimonialSection,
  GreenStatsSection,
  IntegrationsSection,
  PlatformIntegrationSection,
  SecondTestimonialSection,
} from "@/components/organisms";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50/30 to-white font-sans overflow-x-hidden">
      <Header />
      <div className="relative">
        <HeroSection />
        <FocusStatsSection />
        <ProductivitySection />
        <DepartmentsSection />
        <TestimonialSection />
        <GreenStatsSection />
        <IntegrationsSection />
        <PlatformIntegrationSection />
        <SecondTestimonialSection />
      </div>
      <Footer />
    </main>
  );
}