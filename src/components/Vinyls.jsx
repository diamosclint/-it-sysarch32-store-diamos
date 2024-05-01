import React, { useState, useEffect } from 'react';
import { db } from "../config/firebase-config";
import { collection, getDocs } from "firebase/firestore";

const Vinyls = () => {
    const [vinyls, setVinyls] = useState([]);

    useEffect(() => {
        const fetchVinyls = async () => {
            try {
                const vinylsCollection = collection(db, 'vinyls');
                const snapshot = await getDocs(vinylsCollection);
                const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setVinyls(data);
            } catch (error) {
                console.error("Error fetching vinyls: ", error);
            }
        };

        fetchVinyls();
    }, []);

    return (
        <div className='max-w-7xl mx-auto px-6 mt-20'>
            <h1 className='text-3xl font-semibold mt-10 mb-10'>Vinyls</h1>
            <div className="flex flex-wrap justify-center items-center gap-6">
                {vinyls.map(vinyl => (
                    <div key={vinyl.id} className="flex flex-col items-center mx-4 my-6">
                        <img className='h-32 w-32' src={vinyl.image} alt={vinyl.name} />
                        <h2 className="mt-2 font-semibold">{vinyl.name}</h2>
                        <p className="mt-1 text-slate-800">Price: ${vinyl.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Vinyls;
