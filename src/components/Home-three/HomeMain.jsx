import React from 'react';
import Footer from '../common/Footers/Footer';
import Header from '../common/Header';
import AboutArea from './AboutArea';
import BlogArea from './BlogArea';
import CtaOneArea from './Cta-1Area';
import CtaTwoArea from './Cta-2';
import HeroArea from './HeroArea';
import PortfolioArea from './PortfolioArea';
import ServicesArea from './ServicesArea';
import TestimonialArea from './TestimonialArea';

const HomeThreeMain = () => {
	return (
		<div className='body-bg-3'>
		  <Header/>
			<HeroArea/>
			<AboutThree/>
			<ServicesArea/>
			<CtaOneArea/>
			<PortfolioArea/>
			<TestimonialArea/>
			<CtaTwoArea/>
			<BlogArea/>
			<Footer/>
		</div>
	);
};

export default HomeMain;