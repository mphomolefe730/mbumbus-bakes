import { Link } from 'react-router-dom';
import './homepage.css';
import images from '../../assets/jsons/images.json';
import businessInfo from '../../assets/jsons/business-information.json';
import { useEffect } from 'react';

function HomePage(){
    let heroImageUrl = images.heroImage;
    let heroImageUrl2 = images.jamHero;

    useEffect(() => {
        const heroSection = document.getElementsByClassName('heroSection')[0] as HTMLElement;
        heroSection.style.backgroundImage = `url(${heroImageUrl})`;

        const heroSection2 = document.getElementsByClassName('heroSection')[1] as HTMLElement;
        heroSection2.style.backgroundImage = `url(${heroImageUrl2})`;
        
    }, []);
    
	return(
		<div className='homeContainer'>
            <div className='heroSection'>
                <div>
                    <h1>INSANELY </h1>
                    <h1>TASTY & </h1>
                    <h1>GORGEOUS </h1>
                    <h1>bakes </h1>
                </div>
                <Link to="/buckets">Shop buckets</Link>
            </div>
            <div className='heroSection2'>
                <p  className='gold-text'>MBUMBUS BAKES?</p>
                <h1>{businessInfo.whoarewe}</h1>
            </div>
            <div className='heroSection3'>                
                <div>
                    <div className='videoContainer'>
                        <video 
                            src={images.deliveryVideo}
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                        />
                    </div>
                    <h1  className='gold-text'>convenience</h1>
                    <p>{businessInfo.convenience}</p>
                </div>
                <div>
                    <div className='videoContainer'>
                        <video 
                            src={images.cakeVideo}
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                        />
                    </div>
                    <h1 className='gold-text'>Packaging</h1>
                    <p>{businessInfo.packaging}</p>
                </div>
                <div className="lastEmement">
                    <div className='videoContainer'>
                        <video 
                            src={images.cookieVideo}
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                        />
                    </div>
                    <h1 className='gold-text'>taste</h1>
                    <p>{businessInfo.taste}</p>
                </div>
            </div>
            
            <div className='heroSection' style={{height: '40svh'}}>
                <div>
                    <h1>{businessInfo.onTheGoCaption}</h1>
                </div>
                <p>{businessInfo.onTheGoInfo}</p>
                <Link to="/offerings">Browse</Link>
            </div>
		</div>
	)
};

export default HomePage;
