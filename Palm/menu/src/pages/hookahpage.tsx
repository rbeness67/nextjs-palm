import React from 'react';
import Head from 'next/head';
import styles from '../styles/Hookah.module.css';
import Navbar from './navbar';


type Item = {
    name: string;
    sorte: string[];
    price: number;
};

type Category = {
    name: string;
    items: Item[];
};



const categories: Category[] = [
    {
        name: 'Chichas',
        items: [
            { name: 'Pastilles', sorte: [], price: 10 },
            { name: 'Brohood', sorte: [], price: 15 },
            { name: 'Kaloud', sorte: [], price: 15 },
            { name: 'Quasar', sorte: [], price: 20 },
        ],
    }
];

type Flavors = {
    name: string;
    descriptif: string;
};

const flavors: Flavors[] = [
    { name: 'Love 66', descriptif: 'Agrumes' },
    { name: 'Arlequin', descriptif: 'Agrumes' },
    { name: 'Menthe Sucrée', descriptif: 'Agrumes' },
    { name: 'Menthe Sucrée', descriptif: 'Agrumes' },
    { name: 'Love 66', descriptif: 'Agrumes' },
    { name: 'Love 66', descriptif: 'Agrumes' },
    { name: 'Love 66', descriptif: 'Agrumes' },
    { name: 'Love 66', descriptif: 'Agrumes' },
    { name: 'Love 66', descriptif: 'Agrumes' },
    { name: 'Love 66', descriptif: 'Agrumes' },
    { name: 'Love 66', descriptif: 'Agrumes' },

];

const HookahPage = () => {
    return (
        <main style={{
            backgroundImage: `linear-gradient(135deg, #212529 , #495057)`,
            height: '180vh',
            width: '100vw',
        }}>
            <div className="absolute top-0 w-full h-full grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 p-4 sm:p-8 ">


                {/* Categories Section */}
                {categories.map((category) => (
                    <div key={category.name} className="flex justify-center items-center">
                        <div className="w-full max-w-md p-2 justify-center">
                            <h2 className="flex justify-center items-center font-bold mb-1 text-white" style={{ fontSize: 50, fontFamily: 'Dancing Script' }}>{category.name}</h2>
                            <ul>
                                {category.items.map((item) => (
                                    <li key={item.name} className="flex justify-between items-center text-gray-100">
                                        <div className="flex flex-col">
                                            <span className="font-bold" style={{ fontSize: 25, fontFamily: 'Alegreya' }}>{item.name}</span>
                                            {item.sorte.length > 0 && <span className="text-sm text-gray-200" style={{ fontSize: 20, fontFamily: 'Alegreya' }}>{item.sorte.join(", ")}</span>}
                                        </div>
                                        <span className="flex-shrink-0" style={{ fontSize: 20 }}>{item.price.toFixed(2)} €</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}

                {/* Flavors Section */}
                <div className="flex justify-center items-center justify-center"> {/* Added sm:justify-center class */}
                    <div className="w-full max-w-md p-2 justify-center">
                        <h2 className="flex justify-center items-center font-bold text-white" style={{ fontSize: 50, fontFamily: 'Dancing Script' }}>Goûts</h2>
                        <div className="flex grid grid-cols-2 gap-3">
                            {flavors.map((flavor, index) => (
                                <div key={index} className="text-gray-100">
                                    <div className="font-bold " style={{ fontSize: 25, fontFamily: 'Alegreya' }}>{flavor.name}</div>
                                    <div className="text-sm text-gray-200" style={{ fontSize: 20, fontFamily: 'Alegreya' }}>{flavor.descriptif}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Navbar />
        </main>
    );
};

export default HookahPage;