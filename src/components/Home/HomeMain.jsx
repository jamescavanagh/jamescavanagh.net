import React from 'react';
import Footer from '../common/Footers/Footer';
import Header from '../common/Header';
import AboutArea from './AboutArea';
import BlogArea from './BlogArea';
import CtaOneArea from './Cta-1';
import CtaTwoArea from './Cta-2';
import HeroArea from './HeroArea';
import PortfolioArea from './PortfolioArea';
import ServicesArea from './ServicesArea';
import TestimonialArea from './TestimonialArea';

const HomeMain = () => {
	return (
		<div className='body-bg-3'>
		  <Header/>
			<HeroArea/>
			<AboutArea/>
			<ServicesArea/>
			<PortfolioArea/>
			<CtaTwoArea/>
			<BlogArea/>
			<Footer/>
		</div>
	);
};

export default HomeMain;