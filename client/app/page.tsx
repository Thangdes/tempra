import {
  Header,
  Footer,
  HeroSection,
  FocusStatsSection,
  ProductivitySection,
  DepartmentsSection,
  ThirtyDaySection,
  TestimonialSection,
  GreenStatsSection,
  IntegrationsSection,
  PlatformIntegrationSection,
  SecondTestimonialSection,
  EnterpriseSection,
} from "@/components/organisms";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />
      <HeroSection />
      <FocusStatsSection />
      <ProductivitySection />
      <DepartmentsSection />
      <ThirtyDaySection />
      <TestimonialSection />
      <GreenStatsSection />
      <IntegrationsSection />
      <PlatformIntegrationSection />
      <SecondTestimonialSection />
      <EnterpriseSection />
      <Footer />
    </main>
  );
}