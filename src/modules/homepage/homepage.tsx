import { Link } from 'react-router-dom';
import './homepage.css';
import images from '../../assets/jsons/images.json';
import businessInfo from '../../assets/jsons/business-information.json';
import { useEffect } from 'react';

function HomePage(){
    let heroImageUrl = images.heroImage;

    useEffect(() => {
        const heroSection = document.getElementsByClassName('heroSection')[0] as HTMLElement;
        heroSection.style.backgroundImage = `url(${heroImageUrl})`;
        
    }, []);
    
	return(
		<div className='homeContainer'>
            <div className='heroSection'>
                <div>
                    <h1>INSANELY </h1>
                    <h1>TASTY & </h1>
                    <h1>GORGEOUS </h1>
                    <h1>COOKIES </h1>
                </div>
                <Link to="/buckets">Shop bucket orders</Link>
            </div>
            <div className='heroSection2'>
                <p  className='gold-text'>MBUMBUS BAKES?</p>
                <h1>{businessInfo.whoarewe}</h1>
            </div>
            <div className='heroSection3'>
                <div>
                    <img src={images.heroImage} alt="hero section" />
                    <h1 className='gold-text'>Packaging</h1>
                    <p>{businessInfo.packaging}</p>
                </div>
                <div>
                    <img src={images.heroImage} alt="hero section" />
                    <h1 className='gold-text'>taste</h1>
                    <p>{businessInfo.taste}</p>
                </div>
                <div>
                    <img src={images.heroImage} alt="hero section" />
                    <h1  className='gold-text'>convenience</h1>
                    <p>{businessInfo.convenience}</p>
                </div>
            </div>
		</div>
	)
};

export default HomePage;
