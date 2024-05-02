import React, { useState, useEffect } from 'react';
import { db } from "../config/firebase-config";
import { collection, getDocs } from "firebase/firestore";

const Accessories = () => {
    const [accessories, setAccessories] = useState([]);
    const [selectedAccessory, setSelectedAccessory] = useState(null); // State to store selected accessory
    const [quantity, setQuantity] = useState(1); // State to store quantity

    useEffect(() => {
        const fetchAccessories = async () => {
            try {
                const accessoriesCollection = collection(db, 'accessories');
                const snapshot = await getDocs(accessoriesCollection);
                const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setAccessories(data);
            } catch (error) {
                console.error("Error fetching accessories: ", error);
            }
        };

        fetchAccessories();
    }, []);

    // Function to handle image click and set selectedAccessory state
    const handleImageClick = (accessory) => {
        setSelectedAccessory(accessory);
        document.getElementById('accessory_modal').showModal();
    };

    // Function to handle quantity change
    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => prevQuantity + change);
    };

    return (
        <div className='max-w-7xl mx-auto px-6 mt-20'>
            <h1 className='text-3xl font-semibold mt-10 mb-10'>Accessories</h1>
            <div className="flex flex-wrap justify-center items-center gap-6">
                {accessories.map(accessory => (
                    <div key={accessory.id} className="flex flex-col items-center mx-4 my-6">
                        <img className='h-20 w-20 object-cover cursor-pointer' onClick={() => handleImageClick(accessory)} src={accessory.image} alt={accessory.name} />
                        <h2 className="mt-2 font-semibold">{accessory.name}</h2>
                        <p className="mt-1 text-slate-800">Price: ${accessory.price}</p>
                    </div>
                ))}
            </div>
            {/* Modal */}
            {selectedAccessory && (
                <dialog id="accessory_modal" className="modal">
                    <div className="modal-box">
                        <button className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2" onClick={() => document.getElementById('accessory_modal').close()}>✕</button>
                        <h3 className="font-bold text-lg">{selectedAccessory.name}</h3>
                        <img className='h-48 w-auto object-cover mt-5 ml-32 justify-center' src={selectedAccessory.image} alt={selectedAccessory.name} />
                        <p className="mt-2">Price: ${selectedAccessory.price}</p>
                        <div className="flex items-center mt-6">
                            <h3 className='font-semibold mr-2'>Quantity</h3>
                            <button className="btn btn-sm gap-2" onClick={() => handleQuantityChange(-1)}>-</button>
                            <span className="mx-2">{quantity}</span>
                            <button className="btn btn-sm" onClick={() => handleQuantityChange(1)}>+</button>
                        </div>
                        <button className='mt-6 bg-dark-gray text-white px-4 rounded-full py-2'>Add to Cart</button>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn" onClick={() => document.getElementById('accessory_modal').close()}>Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default Accessories;
