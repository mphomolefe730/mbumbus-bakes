import buckets from '../../assets/jsons/packet-prices.json';
import { useState, useEffect } from "react";
import images from '../../assets/jsons/images.json';
import { Link } from 'react-router-dom';

function Packets(){
    let heroImageUrl = images.packetImageUrl;
    const [totalPrice, setTotalPrice] = useState(0);    
    const [selectedItems, setSelectedItems] = useState<
        { bucketName: string; quantity:number; price: number }[]
    >([]);
    const [maxReached, setMaxReached] = useState(false);
    const [cartFilled, setCartFilled] = useState(false);

    const SendRequest = (event: React.FormEvent) => {
        event.preventDefault();
        localStorage.setItem("selectedItemsPackets", JSON.stringify(selectedItems));
        setCartFilled(true);
    };

    const handlePriceChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        bucket: any,
        quantity: number,
        price: number
        ) => {
        let newSelectedItems;
        setSelectedItems(prev => {
            if (e.target.checked && prev.filter( item => (item.bucketName === bucket.bucketName))) {
                newSelectedItems = prev.filter( item => !(item.bucketName === bucket.bucketName))
                newSelectedItems = [...newSelectedItems, { bucketName: bucket.bucketName, quantity, price }];
            } else {
                newSelectedItems = prev.filter( item => !(item.bucketName === bucket.bucketName && item.price === price));
            }
            return newSelectedItems;
        });
    };

    useEffect(() => {
        const total = selectedItems.reduce((sum, item) => sum + (item.price), 0);
        setTotalPrice(total);
        const max = selectedItems.reduce((sum, item) => sum + item.quantity, 0) * 3 >= 18;
        setMaxReached(max);
        const heroSection = document.getElementsByClassName('heroSectionBuckets')[0] as HTMLElement;
        heroSection.style.backgroundImage = `url(${heroImageUrl})`;
    }, [selectedItems]);

    useEffect(() => {        
        if (localStorage.getItem("selectedItemsPackets") != null) setCartFilled(true);
    }, []);

    return(
        <div className="bucketContainer">
            <div className="heroSectionBuckets move">
                <h1 style={{display: 'flex', margin: "auto"}}>packets</h1> 
            </div>
            <form onSubmit={SendRequest}>
                <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>

                <tbody>
                    {buckets.map((bucket, index) => (
                    <tr key={index} className="bucketRow">
                        <td className="bucketRowTitle">{bucket.bucketName} <span style={{ color: "red", display: (maxReached) ? 'block' : 'none' }}>Max reached, please reduce quantity</span></td>

                        {bucket.prices.map((price, pIndex) => (
                        <td key={pIndex}>
                            <label className="price-option">
                                <input
                                type="checkbox"
                                checked={selectedItems.some(
                                    item =>
                                    item.bucketName === bucket.bucketName &&
                                    item.quantity === price
                                )}
                                onChange={(e) => handlePriceChange(e, bucket, price, price * 15)}
                                />

                                <span className="price-card">
                                <span className="price">X{price}</span>
                                <span className="check">✓</span>
                                </span>
                            </label>
                            </td>
                        ))}
                    </tr>
                    ))}
                </tbody>
                </table>
                <div className="totalSection">
                    <p>{`${selectedItems.reduce((sum, item) => sum + item.quantity, 0)} packet(s)`}</p>
                    <p>Total Price: R{totalPrice}</p>
                    <button style={{display: (maxReached || cartFilled) ? 'none' : 'block' }} type="submit">ADD TO CART</button>
                     <Link className="signature" to="/checkout" style={{display: cartFilled ? 'block' : 'none'}}>EDIT CART</Link>
                </div>
            </form>
        </div>
    );
}

export default Packets;