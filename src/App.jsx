import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Apparels from './components/Apparels';
import Accessories from './components/Accessories';
import Vinyls from './components/Vinyls';
import Footer from './components/Footer';
import basket from './assets/basket.svg';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PFBXCRx6tmKnG4woax6p4qyo1xn1Is2dnmEn0PSkBQBXaeqLaL0n7zXDmV0g717f4l8fb7Jf18k2edzvIH0kvPV00cAIHZPoH');

function App() {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [basketItems, setBasketItems] = useState([]);
  const [error, setError] = useState(null);

  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  const addToBasket = (item) => {
    setBasketItems([...basketItems, item]);
  };

  const removeFromBasket = (index) => {
    const newBasketItems = [...basketItems];
    newBasketItems.splice(index, 1);
    setBasketItems(newBasketItems);
  };

  const closeBasket = () => {
    setIsBasketOpen(false);
  };

  const handleClick = async () => {
    const stripe = await stripePromise;

    const response = await fetch('http://localhost:4000/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        productName: basketItems.map(item => item.name).join(', '), 
        price: basketItems.reduce((total, item) => total + parseFloat(item.price), 0)
      }), 
    });

    if (response.ok) {
      const session = await response.json();

      const result = await stripe.redirectToCheckout({ sessionId: session.id });

      if (result.error) {
        setError(result.error.message);
      }
    } else {
      setError('Error creating checkout session');
    }
  };

  return (
    <>
      <div className="relative">
        <Navbar />
        <Apparels addToBasket={addToBasket} />
        <Accessories addToBasket={addToBasket} />
        <Vinyls addToBasket={addToBasket} />
        <Footer />
        <div className="fixed bottom-5 right-5">
          <button onClick={toggleBasket}>
            <img className='h-10' src={basket} alt="Basket" />
          </button>
        </div>
        {isBasketOpen && (
          <div className="fixed bottom-0 right-0 w-80 bg-slate-50 h-full">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-4">Basket</h2>
              <ul className='mt-10'>
                {basketItems.map((item, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <img className='h-16 w-auto' src={item.image} alt="" />
                    <span className="ml-2">{item.name} - ${item.price}</span>
                    <button className="ml-auto text-dark text-sm border border-black px-2 py-1 rounded-md" onClick={() => removeFromBasket(index)}>Remove</button>
                  </li>
                ))}
              </ul>
              {basketItems.length > 0 && (
                <div className="flex justify-between items-center mt-4">
                  <span className="font-semibold">Total:</span>
                  <span>${basketItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)}</span>
                </div>
              )}
            </div>
            <button className='absolute bottom-20 ml-5  grid bg-dark-gray text-white py-2 px-4 rounded-full text-md hover:bg-black' onClick={handleClick}>Checkout</button>
            <button className="absolute top-2 right-2 bg-gray-300 px-3 py-2 rounded-full border hover:bg-slate-200 ease-in-out" onClick={closeBasket}>✕</button>
          </div>
        )}
      </div>
    </>

  );
}

export default App;
