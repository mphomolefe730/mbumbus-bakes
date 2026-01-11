import businessInfo from '../../assets/jsons/business-information.json';
import images from '../../assets/jsons/images.json';

function FAQ(){
    return(
		<div className='homeContainer'>
            
            <div className='heroSection2'>
                <p  className='gold-text'>Health-focused choice</p>
                <h1>{businessInfo.health}</h1>
            </div>

            <div className='heroSection3'>   
                <div>
                    <div className='videoContainer'>
                        <video 
                            src={images.jamTartVideo}
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                        />
                    </div>
                    <h1 className='gold-text'>For the sweet tooth</h1>
                    <p>{businessInfo.sweetTooth}</p>
                </div>             
                <div>
                    <div className='videoContainer'>
                        <video 
                            src={images.event2Video}
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                        />
                    </div>
                    <h1  className='gold-text'>Event catering & Stock orders</h1>
                    <p>{businessInfo.catering}</p>
                </div>
                <div>
                    <div className='videoContainer'>
                        <video 
                            src={images.ovenOpenVideo}
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                        />
                    </div>
                    <h1 className='gold-text'>Surprise Drops</h1>
                    <p>{businessInfo.surpriseDrop}</p>
                </div>
            </div>
        </div>
    )
}

export default FAQ;