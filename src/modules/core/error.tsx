import { useEffect } from "react";
import images from '../../assets/jsons/images.json';


function Error(){
    let heroImageUrl = images.plainSconeMug;

    useEffect(()=>{
        const heroSection = document.getElementsByClassName('heroSection')[0] as HTMLElement;
        heroSection.style.backgroundImage = `url(${heroImageUrl})`;
    },[]);

    return(
        <div className='homeContainer'>
            <div className='heroSection' style={{borderRadius: '1rem', height: '35vh', marginBottom: '3rem' }}>
                <h1>404</h1>
                <p>page still under construction</p>
                <a href="/packets">shop packets</a>
            </div>
        </div>
    );
}
export default Error;