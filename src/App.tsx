import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Topbar from '@/components/layout/Topbar';
// Sections
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import DepartmentsSection from '@/components/sections/DepartmentsSection';
import HeroSection from '@/components/sections/HeroSection';
import LatestArticlesSection from '@/components/sections/LatestArticlesSection';
import OurTeamSection from '@/components/sections/OurTeamSection';
import ServicesSection from '@/components/sections/ServicesSection';

export default function App() {
	return (
		<div className="relative">
			<Topbar />
			<Navbar />

			<HeroSection />
			<ServicesSection />
			<AboutSection />
			<DepartmentsSection />
			<ContactSection />
			<OurTeamSection />
			<LatestArticlesSection />

			<Footer />
		</div>
	);
}
