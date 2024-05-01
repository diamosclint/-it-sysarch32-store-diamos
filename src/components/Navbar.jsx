import digital from '../assets/digital.jpg'
function Navbar() {
    return (
        <>
            <div className="h-16 bg-dark-gray flex justify-center items-center">
                <h2 className="text-white italic">Digital Store</h2>
            </div>
            <div className="h-10 bg-dark-gray border border-slate-200 ">
                <ul className="flex justify-center gap-10 items-center mt-2">
                    <li className="text-white text-sm">Shirts</li>
                    <li className="text-white text-sm">Accessories</li>
                    <li className="text-white text-sm">Vinyls</li>
                    <li className="text-white text-sm">More</li>
                </ul>
            </div>
            <div>
                <img className='w-full h-80 object-cover' src={digital}></img>
            </div>
        </>
    );
}


export default Navbar;