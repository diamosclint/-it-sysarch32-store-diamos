import React, { useState, useEffect } from 'react';
import { db } from "../config/firebase-config";
import { collection, getDocs } from "firebase/firestore";

const Accessories = () => {
    const [accessories, setAccessories] = useState([]);

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

    return (
        <div className='max-w-7xl mx-auto px-6 mt-20'>
            <h1 className='text-3xl font-semibold mt-10 mb-10'>Accessories</h1>
            <div className="flex flex-wrap justify-center items-center gap-6">
                {accessories.map(accessory => (
                    <div key={accessory.id} className="flex flex-col items-center mx-4 my-6">
                        <img className='h-20 w-20 object-cover' src={accessory.image} alt={accessory.name} />
                        <h2 className="mt-2 font-semibold">{accessory.name}</h2>
                        <p className="mt-1 text-slate-800">Price: ${accessory.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accessories;