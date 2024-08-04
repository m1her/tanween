import { NavBar } from "@/components/NavBar";
import { ContactSection } from "@/features/ContactsSection";
import { HomeSection } from "@/features/HomeSection";
import { ServicesSection } from "@/features/ServicesSection";
import { WorksSection } from "@/features/WorksSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomeSection />
      <ServicesSection />
      <WorksSection />
      <ContactSection />
    </div>
  );
}
