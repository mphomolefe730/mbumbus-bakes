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
                    <h1>bakes </h1>
                </div>
                <Link to="/buckets">Shop bucket orders</Link>
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
                <div>
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
            
            <div className='heroSection' style={{ height: "25svh"}}>
                <div>
                    <h1>{businessInfo.onTheGo}</h1>
                </div>
                <Link to="/packets">shop packets</Link>
            </div>
		</div>
	)
};

export default HomePage;
