import Hero from '../Components/Hero';
import HomeCards from '../Components/HomeCards';
import Joblisting from '../Components/Joblistings';
import ViewAll from '../Components/ViewAll';

const Homepage = () => {
  return (
    <>
    <Hero/>
    <HomeCards />
    <Joblisting isHome={true} />
    <ViewAll />
    </>
  );
};

export default Homepage
