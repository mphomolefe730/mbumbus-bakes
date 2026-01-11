import businessInfo from '../../assets/jsons/business-information.json';

function Footer(){   
    const phoneNumber = businessInfo.phoneNumber; 
    const message = `Hello! 👋
I’m contacting you from your website filling a new ticket.

*Service/Topic:* 
[type your service/topic here]

*Details:* 
[brief description of what you need help with]

*Timeline:*
[if any (e.g) 10 Jan 2026]

Thank you, I look forward to your response.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    return(
        <div className='heroSection footer'>
            <a href={whatsappUrl} target="_blank">Contact us</a>
            <p>or email <a style={{backgroundColor: 'black', color: 'white', padding: 0}} href="mailto:mbumbusbakes@gmail.com">mbumbusbakes@gmail.com</a></p>
            <p>© 2026 Mbumbus Bakes. All rights reserved.</p>
        </div>
    )
}

export default Footer;