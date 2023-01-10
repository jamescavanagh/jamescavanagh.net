import dynamic from 'next/dynamic';
import HomeMain from '../components/Home';
import SEO from '../components/seo';

const HomeMain = () => {
  return (
    <>
      <SEO pageTitle="Home" />
      <HomeMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(HomeMain), { ssr: false });