import "./buckets.css";
import buckets from '../../assets/jsons/bucket-prices.json';
import { useState, useEffect } from "react";
import images from '../../assets/jsons/images.json';

function Buckets() {    
    let heroImageUrl = images.heroImage;
    const [selectedItems, setSelectedItems] = useState<
        { bucketName: string; price: number }[]
    >([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const SendRequest = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(selectedItems);
    };

    const handlePriceChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        bucket: any,
        price: number
        ) => {
        setSelectedItems(prev => {
            if (e.target.checked) {
            return [...prev, { bucketName: bucket.bucketName, price }];
            } else {
            return prev.filter(
                item =>
                !(item.bucketName === bucket.bucketName && item.price === price)
            );
            }
        });
    };

    useEffect(() => {
        const total = selectedItems.reduce((sum, item) => sum + item.price, 0);
        setTotalPrice(total);
        const heroSection = document.getElementsByClassName('heroSectionBuckets')[0] as HTMLElement;
        heroSection.style.backgroundImage = `url(${heroImageUrl})`;
    }, [selectedItems]);


    return (
        <div className="bucketContainer">
            <div className="heroSectionBuckets">
                
            </div>
        <form onSubmit={SendRequest}>
            <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>2.5L</th>
                <th>5L</th>
                <th>10L</th>
                <th>20L</th>
                </tr>
            </thead>

            <tbody>
                {buckets.map((bucket, index) => (
                <tr key={index} className="bucketRow">
                    <td className="bucketRowTitle">{bucket.bucketName}</td>

                    {bucket.prices.map((price, pIndex) => (
                    <td key={pIndex}>
                        <label className="price-option">
                            <input
                            type="checkbox"
                            checked={selectedItems.some(
                                item =>
                                item.bucketName === bucket.bucketName &&
                                item.price === price
                            )}
                            onChange={(e) => handlePriceChange(e, bucket, price)}
                            />

                            <span className="price-card">
                            <span className="price">R{price}</span>
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
                <p>Total Price: R{totalPrice}</p>
                <button type="submit">checkout</button>
            </div>
        </form>
        </div>
    );
}

export default Buckets;