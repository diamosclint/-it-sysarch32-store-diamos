import React, { useState, useEffect } from 'react';
import { db } from "../config/firebase-config";
import { collection, getDocs } from "firebase/firestore";

const Vinyls = () => {
    const [vinyls, setVinyls] = useState([]);
    const [selectedVinyl, setSelectedVinyl] = useState(null);
    const [quantity, setQuantity] = useState(1);

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

    const handleImageClick = (vinyl) => {
        setSelectedVinyl(vinyl);
        document.getElementById('vinyl_modal').showModal();
    };

    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => prevQuantity + change);
    };

    return (
        <div className='max-w-7xl mx-auto px-6 mt-20 mb-40'>
            <h1 className='text-3xl font-semibold mt-10 mb-10'>Vinyls</h1>
            <div className="flex flex-wrap justify-center items-center gap-6">
                {vinyls.map(vinyl => (
                    <div key={vinyl.id} className="flex flex-col items-center mx-4 my-6">
                        <img className='h-32 w-32 cursor-pointer' onClick={() => handleImageClick(vinyl)} src={vinyl.image} alt={vinyl.name} />
                        <h2 className="mt-2 font-semibold">{vinyl.name}</h2>
                        <p className="mt-1 text-slate-800">Price: ${vinyl.price}</p>
                    </div>
                ))}
            </div>
            {selectedVinyl && (
                <dialog id="vinyl_modal" className="modal">
                    <div className="modal-box">
                        <button className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2" onClick={() => document.getElementById('vinyl_modal').close()}>✕</button>
                        <h3 className="font-bold text-lg">{selectedVinyl.name}</h3>
                        <img className='h-48 w-auto object-cover' src={selectedVinyl.image} alt={selectedVinyl.name} />
                        <p className="mt-2">Price: ${selectedVinyl.price}</p>
                        <div className="flex items-center mt-2">
                            <button className="btn btn-sm" onClick={() => handleQuantityChange(-1)}>-</button>
                            <span className="mx-2">{quantity}</span>
                            <button className="btn btn-sm" onClick={() => handleQuantityChange(1)}>+</button>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn" onClick={() => document.getElementById('vinyl_modal').close()}>Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default Vinyls;
