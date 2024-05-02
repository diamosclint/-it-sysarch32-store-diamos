import React, { useState, useEffect } from 'react';
import { db } from "../config/firebase-config";
import { collection, getDocs } from "firebase/firestore";

const Apparels = () => {
    const [apparels, setApparels] = useState([]);
    const [selectedApparel, setSelectedApparel] = useState(null); // State to store selected apparel

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

    const handleImageClick = (apparel) => {
        setSelectedApparel(apparel);
        document.getElementById('my_modal_1').showModal();
    };

    return (
        <div className='max-w-7xl mx-auto px-6'>
            <h1 className='apparels-section text-3xl font-semibold mt-10 mb-10'>Apparels</h1>
            <div className="flex flex-wrap justify-center items-center gap-6">
                {apparels.map(apparel => (
                    <div key={apparel.id} className="flex flex-col items-center mx-4 my-6 hover:">
                        <img className='h-32 w-32 cursor-pointer' onClick={() => handleImageClick(apparel)} src={apparel.image} alt={apparel.name} />
                        <h2 className='font-semibold'>{apparel.name}</h2>
                        <p className='text-slate-600 font-medium'>${apparel.price}</p>
                    </div>
                ))}
            </div>
            {selectedApparel && (
                <dialog id="my_modal_1" className="modal h-auto w-auto">
                    <div className="modal-box relative">
                        <button className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2" onClick={() => document.getElementById('my_modal_1').close()}>✕</button>
                        <h3 className="font-bold text-lg">{selectedApparel.name}</h3>
                        <div className='flex mt-4'>
                            <div className='grid-cols-1 justify-center items-center'>
                                <img className='h-48 w-auto object-cover' src={selectedApparel.image} alt={selectedApparel.name} />
                                <p className='mt-2 ml-16 font-medium'>${selectedApparel.price}</p>
                            </div>
                            <div className='ml-16'>
                                <h3 className='font-semibold'>Size</h3>
                                <div className="flex items-center mt-2 gap-1">
                                    <input type="radio" id="size_s" name="size" value="S" />
                                    <label className="ml-1 text-sm" htmlFor="size_s">S</label>
                                    <input type="radio" id="size_m" name="size" value="M" className="ml-2" />
                                    <label className="ml-1 text-sm" htmlFor="size_m">M</label>
                                    <input type="radio" id="size_l" name="size" value="L" className="ml-2" />
                                    <label className="ml-1 text-sm" htmlFor="size_l">L</label>
                                </div>
                                <h3 className='font-semibold mt-4'>Quantity</h3>
                                <div className="flex items-center mt-2">
                                    <button className="btn btn-sm mr-2">-</button>
                                    <span>1</span>
                                    <button className="btn btn-sm ml-2">+</button>
                                </div>
                                <h3 className='font-semibold mt-4'>Colors</h3>
                                <div className="flex items-center mt-2">
                                    <div className="w-4 h-4 rounded-full bg-slate-400 mr-2"></div>
                                    <div className="w-4 h-4 rounded-full bg-black mr-2"></div>
                                    <div className="w-4 h-4 rounded-full bg-gray-500"></div>
                                </div>
                                <div className='mt-10 bg-dark-gray rounded-full py-2 px-4 hover:bg-black transition duration-300 ease-in-out'>
                                    <button className='text-white text-sm ml-0.5 items-center text-center justify-center font-semibold'>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn" onClick={() => document.getElementById('my_modal_1').close()}>Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default Apparels;
