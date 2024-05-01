
import React, { useState, useEffect } from 'react';
import { db } from "../config/firebase-config";
import { collection, getDocs } from "firebase/firestore";



const Apparels = () => {
    const [apparels, setApparels] = useState([]);

    useEffect(() => {
        const fetchApparels = async () => {
            try {
                const apparelsCollection = collection(db, 'apparels');
                const snapshot = await getDocs(apparelsCollection);
                const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setApparels(data);
            } catch (error) {
                console.error("Error fetching apparels: ", error);
            }
        };

        fetchApparels();
    }, []);

    return (
        <div className='max-w-7xl mx-auto px-6'>
            <h1 className='text-3xl font-semibold mt-10 mb-10'>Apparels</h1>
            <div className="flex flex-wrap justify-center items-center gap-6">
                {apparels.map(apparel => (
                    <div key={apparel.id} className="flex flex-col items-center mx-4 my-6">
                        <img className='h-32 w-32' src={apparel.image} alt={apparel.name} />
                        <h2 className="mt-2 font-semibold">{apparel.name}</h2>
                        <p className="mt-1 text-slate-800">Price: ${apparel.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Apparels;