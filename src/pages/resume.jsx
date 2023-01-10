import dynamic from 'next/dynamic';
import ResumeMain from '../components/Resume/';
import SEO from '../components/seo';

const AnalystResume = () => {
  return (
    <>
     <SEO pageTitle="About Me"  />
     <ResumeMain/>
    </>
  );
};

export default dynamic(()=> Promise.resolve(AnalystResume), {ssr: false});