import { Link } from 'react-router-dom';
import './homepage.css';
import images from '../../assets/jsons/images.json';
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
			<p>Home Page Works!</p>
		</div>
	)
};

export default HomePage;
