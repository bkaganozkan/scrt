import './App.css';
import FifthSection from './Components/FifthSection.tsx';
import FooterSection from './Components/FooterSection.tsx';
import FourthSection from './Components/FourthSection.tsx';
import HeaderComponent from './Components/HeaderComponent.tsx';
import LandingComponent from './Components/LandingComponent.tsx';
import SecondSection from './Components/SecondSection.tsx';
import SixthSection from './Components/SixthSection.tsx';
import ThirdSection from './Components/ThirdSection.tsx';
function App() {
  return (
    <div className="">
      <HeaderComponent />
      <LandingComponent />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <FooterSection />
    </div>
  );
}

export default App;
