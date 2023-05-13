import Link from 'next/link';
import { useRouter } from 'next/router';
import { HomeIcon, ArchiveBoxIcon, SwatchIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
    const router = useRouter();

    return (
        <nav className="fixed bottom-0 left-0 w-full bg-black rounded-t-xl overflow-hidden z-50" style={{
            zIndex: 300,
            pointerEvents: 'auto'
        }}>
            < div className="container flex justify-center items-center relative w-full h-full">
                <div className="flex justify-between w-full ">
                    <Link legacyBehavior href="/Boissons">
                        <a
                            className={`text-white flex-1 flex flex-col items-center justify-center text-center py-2 ${router.pathname === '/Boissons' ? 'bg-gray-800' : ''} w-full h-full hover:bg-gray-800`}
                        >
                            <ArchiveBoxIcon className="w-6 h-6 mb-2" />
                            <span>Boissons</span>
                        </a>
                    </Link>
                    <Link legacyBehavior href="/hookahpage">
                        <a
                            className={`text-white flex-1 flex flex-col items-center justify-center text-center py-2 ${router.pathname === '/hookahpage' ? 'bg-gray-800' : ''} w-full h-full hover:bg-gray-800`}
                        >
                            <SwatchIcon className="w-6 h-6 mb-2" />
                            <span>Chichas</span>
                        </a>
                    </Link>
                    <Link legacyBehavior href="/">
                        <a className={"text-white flex-1 flex flex-col items-center justify-center text-center py-2   w-full h-full hover:bg-gray-800"}>
                            <HomeIcon className="w-6 h-6 mb-2" />
                            <span>Home</span>
                        </a>
                    </Link>
                    <Link legacyBehavior href="/page3">
                        <a
                            className={`text-white flex-1 flex flex-col items-center justify-center text-center py-2 ${router.pathname === '/page3' ? 'bg-gray-800' : ''} w-full h-full hover:bg-gray-800`}
                        >
                            <ArchiveBoxIcon className="w-6 h-6 mb-2 transform rotate-180" />
                            <span>Alcools</span>
                        </a>
                    </Link>
                    <Link legacyBehavior href="/page4">
                        <a
                            className={`text-white flex-1 flex flex-col items-center justify-center text-center py-2 ${router.pathname === '/page4' ? 'bg-gray-800' : ''} w-full h-full hover:bg-gray-800`}
                        >
                            <SwatchIcon className="w-6 h-6 mb-2 transform rotate-180" />
                            <span>Packs</span>
                        </a>
                    </Link>

                </div>
            </div>
        </nav >
    );
}
