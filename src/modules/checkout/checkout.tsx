import { useEffect, useState } from 'react';
import './checkout.css';

function Checkout(){
    const [bucketItems, setBucketItems] = useState<any[]>([]);
    const [packetItems, setPacketItems] = useState<any[]>([]);
    const [selectedItems, setSelectedItems] = useState<string>("");

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
        console.log(form);
    }

    useEffect(() => {
        document.title = "Checkout - Mbumbus Bakes";
        document.body.style.backgroundColor = "#7babffff";
        const bucketItems = JSON.parse(localStorage.getItem("selectedItemsBuckets")!);
        const packetItems = JSON.parse(localStorage.getItem("selectedItemsPackets")!);
        if (bucketItems) setBucketItems(bucketItems);
        if (packetItems) setPacketItems(packetItems);
    }, []);
    const totalPrice = bucketItems.reduce((total, item) => total + item.price, 0) + packetItems.reduce((total, item) => total + item.price, 0);

    return(
        <div className="bucketContainer">
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
                {
                    packetItems.map((item, index) => (
                        <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <p> { `${item.bucketName} [${item.quantity} packets]`}</p>
                            <p> { `R${item.price}`}</p>
                        </div>
                    ))
                }
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
                        <input type="text" for="phoneNumber" name="phoneNumber" required />
                    </p>
                    <p>
                        <label>address: </label>
                        <input type="text" for="address" name="address" required />
                    </p>
                    <button type="submit">Confirm Order</button>
                </form>
            </div>
        </div>
    )
}

export default Checkout;