import HeroSection from '../landing-page/sections/HeroSection';
import HowWorksSection from '../landing-page/sections/HowWorksSection';
import QuoteSection from '../landing-page/sections/QuoteSection';
import AccordionSection from '../landing-page/sections/AccordionSection';
import LearnSection from './sections/LearnSection';

const LandingPage = () => {
  return (
    <div className="max-w-base mx-auto px-6 pb-24">
      <HeroSection />
      <HowWorksSection />
      <QuoteSection />
      <AccordionSection />
      <LearnSection />
    </div>
  );
};

export default LandingPage;
