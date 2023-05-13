import Link from 'next/link';
import Logo from '../components/logo';
import Navbar from './navbar';
import Head from 'next/head'
const bgImage = '/bg.png';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useEffect } from 'react';
import styles from '../styles/boissons.module.css'; // Import CSS module styles

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
        name: 'Softs',
        items: [
            { name: 'Coca', sorte: ["Normal", "Cherry", "Zéro"], price: 3.5 },
            { name: 'Schweppes', sorte: ["Agrumes", "Lemon"], price: 3.5 },
            { name: 'Oasis', sorte: ["Tropical", "Pomme Poire"], price: 3.5 },
            { name: 'Minute Maid', sorte: ["Orange", "Pomme", "MultiFruits"], price: 3.5 },
            { name: 'Orangina', sorte: [], price: 3.5 },
            { name: 'Red Bull', sorte: [], price: 5 },
        ],
    },
    {
        name: 'Eaux',
        items: [
            { name: 'Plate', sorte: [], price: 3 },
            { name: 'Sirop', sorte: ["Fraise", "Pomme", "Cassis"], price: 3 },
            { name: 'Diabolo', sorte: ["Fraise", "Pomme", "Cassis"], price: 3 },
            { name: 'San Pelligrino', sorte: [], price: 3 },
        ],
    },
    {
        name: 'Boissons Chaudes',
        items: [
            { name: 'Café', sorte: ["Expresso", "Americano"], price: 2 },
            { name: 'Thé', sorte: ["Nature", "Menthe", "Citron"], price: 2.5 },
            { name: 'Chocolat Chaud', sorte: [], price: 3 },
            { name: 'Cappuccino', sorte: [], price: 3 },
        ],
    },
];


export default function Boissons() {
    useEffect(() => {
        // Update background position on scroll
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax');
            parallaxElements.forEach((element) => {
                const speed = parseFloat(element.getAttribute('data-speed'));
                element.style.transform = `translateY(${scrollPosition * speed}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main>
            <div className="absolute top-0 left-0 z-0 w-full h-full">
                <img
                    className="w-full h-full absolute top-0 left-0 object-cover"
                    src={bgImage || ''}
                    alt=""
                    style={{ filter: 'brightness(50%)', width: '100%', height: '140%' }}
                />
            </div>
            <div className={`absolute top-0 w-full h-full grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 p-4 sm:p-8 ${styles.parallaxContainer}`}>
                {categories.map((category, index) => (
                    <div key={category.name} className="flex justify-center items-center">
                        <div
                            className={`w-full max-w-md p-8 justify-center ${styles.parallax}`}
                            data-speed={(index + 1) * .3} // Adjust the parallax speed here
                        >
                            <h2 className="flex justify-center items-center font-bold mb-1 " style={{ color: "#835F37", fontSize: 50, fontFamily: 'Dancing Script' }}>{category.name}</h2>
                            <ul>
                                {category.items.map((item) => (
                                    <li key={item.name} className="flex justify-between items-center text-gray-100 ">
                                        <div className="flex flex-col">
                                            <span className="font-bold" style={{ fontSize: 25, fontFamily: 'Alegreya' }}>{item.name}</span>
                                            {item.sorte.length > 0 && <span className="text-sm text-gray-200" style={{ fontSize: 20, fontFamily: 'Alegreya' }}>{item.sorte.join(", ")}</span>}
                                        </div>
                                        <span className="flex-shrink-0" style={{ fontSize: 20, }}>{item.price.toFixed(2)} €</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <Navbar />
        </main>
    );
}