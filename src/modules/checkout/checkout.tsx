import { useEffect, useState } from 'react';
import './checkout.css';
import images from '../../assets/jsons/images.json';

function Checkout(){
    const [bucketItems, setBucketItems] = useState<any[]>([]);
    const [packetItems, setPacketItems] = useState<any[]>([]);
    const [selectedItems, setSelectedItems] = useState<string>("");
    const [cartFilled, setCartFilled] = useState(false);
    let heroImageUrl = images.blueberrySconeMug;

    const paymentObject = [
        {
            paymentMethod: "cash",
            info: ""
        },{
            paymentMethod: "eft",
            info: ""
        },{
            paymentMethod: "speedpoint",
            info: ""
        }
    ]

    const handleLiterChange = (newQuantity: number) => {
        if (newQuantity == 0) return 2.5;
        if (newQuantity == 1) return 5;
        if (newQuantity == 2) return 10;
        if (newQuantity == 3) return 20;
    }

    const handlePaymentType = (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
    }

    const handleRemovingOfItem = (orderType:string) =>{
        if (orderType === 'bucket') {
            localStorage.removeItem("selectedItemsBuckets");
            localStorage.removeItem("twoMixture");
            setBucketItems([]);
        }else if (orderType === 'packet') {
            localStorage.removeItem("selectedItemsPackets");
            setPacketItems([]);
        }
    }

    useEffect(() => {
        document.title = "Checkout - Mbumbus Bakes";
        const bucketItems = JSON.parse(localStorage.getItem("selectedItemsBuckets")!);
        const packetItems = JSON.parse(localStorage.getItem("selectedItemsPackets")!);
        
        if (bucketItems) {
            setBucketItems(bucketItems);
            setCartFilled(true);
        }
        if (packetItems) {
            setPacketItems(packetItems);
            setCartFilled(true);
        }

        if(bucketItems || packetItems) document.body.style.backgroundColor = "rgba(123, 171, 255, 1)";

        const heroSection = document.getElementsByClassName('heroSection')[0] as HTMLElement;
        heroSection.style.backgroundImage = `url(${heroImageUrl})`;
    }, []);

    const totalPrice = bucketItems.reduce((total, item) => total + item.price, 0) + packetItems.reduce((total, item) => total + item.price, 0);

    return(
        <div>
            <div className="bucketContainer" style={{display: (cartFilled)? 'block' : 'none'}}>
                <h1>Checkout: </h1>
                <div >
                    {
                        bucketItems.map((item, index) => (
                            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <p> { `${item.bucketName} [${handleLiterChange(item.quantity)}L]`}</p>
                                <p> { `R${item.price}`}</p>
                            </div>
                        ))
                    }
                    <div>
                        <button style={{display: (bucketItems.length > 0)? 'block' : 'none'}} className='removeButton' onClick={() => handleRemovingOfItem('bucket')}>Remove All bucket order(s)</button>
                        <button style={{display: (bucketItems.length > 0)? 'none' : 'block'}} className='removeButton'><a href='/buckets'>add bucket(s)</a></button>
                    </div>
                    {
                        packetItems.map((item, index) => (
                            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <p> { `${item.bucketName} [${item.quantity} packets]`}</p>
                                <p> { `R${item.price}`}</p>
                            </div>
                        ))
                    }
                    <div>
                        <button style={{display: (packetItems.length > 0)? 'block' : 'none'}} className='removeButton' onClick={ () => handleRemovingOfItem('packet')}>remove all packet order(s)</button>
                        <button style={{display: (packetItems.length > 0)? 'none' : 'block'}} className='removeButton'><a href='/packets'>add packet(s)</a></button>
                    </div>
                    <h1>Total: R{totalPrice}</h1>
                </div>
                <div className='bankContainer'
                    style= {{ display: (selectedItems === 'eft' || bucketItems.length > 0 ) ? 'block' : 'none' }}>
                    <p>Payment will serve as confirmation to start your order. Please await for order confirmation via WhatsApp before paying. Banking details:</p>
                    <p>Account Holder: Mbumbus Bakes (pty) ltd</p>
                    <p>Account Number: 63170524532</p>
                    <p>Branch Code: 250655</p>
                </div>
                <div className='bankContainer'>
                    <p>payment via:</p>
                    <form action="post" onSubmit={handlePaymentType}>                    
                        <table>             
                            <tbody>
                                {
                                    paymentObject.map((item, index) => {
                                    return (
                                        <td key={index}>
                                            <label  className="price-option">
                                                <input 
                                                    type="checkbox" 
                                                    key={index} 
                                                    value={item.paymentMethod} 
                                                    checked={selectedItems === item.paymentMethod}
                                                    onChange={() => selectedItems == item.paymentMethod ? setSelectedItems("") : setSelectedItems(item.paymentMethod)}
                                                />
                                                <span className="price-card ">
                                                    <span className="price">{item.paymentMethod}</span>
                                                    <span className="check">✓</span>
                                                </span>
                                            </label>
                                        </td>
                                    )
                                    })
                                }
                            </tbody>
                        </table>
                        <p>
                            <label>phone number: </label>
                            <input type="text" name="phoneNumber" required />
                        </p>
                        <p>
                            <label>address: </label>
                            <input type="text" name="address" required />
                        </p>
                        <button type="submit">Confirm Order</button>
                    </form>
                </div>
            </div>

		    <div className='homeContainer' style={{display: (cartFilled)? 'none' : 'block'}}>
                <div className='heroSection' style={{borderRadius: '1rem', height: '35vh', marginBottom: '3rem' }}>
                    <div>
                        <h1>EMPTY CART </h1>
                    </div>
                    <a href="/buckets">Shop bucket orders</a>
                </div>
            </div>
        </div>
    )
}

export default Checkout;