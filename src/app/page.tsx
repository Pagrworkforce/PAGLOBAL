import { CtaSection } from '@/components/landing/cta-section';
import { EcosystemSection } from '@/components/landing/ecosystem-section';
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { MissionSection } from '@/components/landing/mission-section';
import { MovementBanner } from '@/components/landing/movement-banner';
import { PartnersSection } from '@/components/landing/partners-section';
import { PillarsSection } from '@/components/landing/pillars-section';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PartnersSection />
        <MissionSection />
        <EcosystemSection />
        <PillarsSection />
        <CtaSection />
        <MovementBanner />
      </main>
      <Footer />
    </div>
  );
}
