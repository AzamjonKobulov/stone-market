import CardsSection from './sections/CardsSection';
import CareSection from './sections/CareSection';
import HelpSection from './sections/HelpSection';

const StoneIQPage = () => {
  return (
    <div className="max-w-base mx-auto px-6 pb-24">
      <HelpSection />
      <CareSection />
      <CardsSection />
    </div>
  );
};

export default StoneIQPage;
