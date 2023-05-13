import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Logo from '../components/logo';
import Boissons from './Boissons.';
import { HomeIcon, ArchiveBoxIcon, SwatchIcon } from '@heroicons/react/24/solid';
import Navbar from './navbar';
import { useRouter } from 'next/router';
import HookahPage from './hookahpage';
import NavbarHome from './navbarhome';
import NavbarDay from './navbarDay';

const bg = '/bg.png';
const fly = '/splash.png'

const inter = Inter({ subsets: ['latin'] });
const options = { timeZone: 'Europe/Paris' };
const currentHour = new Date().toLocaleString('en-US', { hour: 'numeric', hour12: false, ...options });
const isDayTime = parseInt(currentHour, 10) >= 8 && parseInt(currentHour, 10) < 20;

const bgImage = isDayTime ? bg : fly;


function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center transition-opacity duration-500 opacity-100" style={{ zIndex: 200 }}>
      <Logo className="w-48 h-48 text-white Logo" />
    </div>
  );
}



function Content() {
  return (
    <div className="height: 100vh; display: flex; justify-content: center; align-items: center;" style={{ zIndex: 130 }}>
      <h2 className="flex justify-center items-center mb-1 " style={{ color: "white", fontSize: 140, fontFamily: 'Dancing Script' }}>Menu</h2>
    </div>
  );
}

function SplashOverlay() {
  return (
    <div className="absolute inset-0" style={{ zIndex: 150 }}>
      <div className="h-1/2 w-full flex items-center justify-center absolute top-0 left-0 bg-black animate-splash-top"></div>
      <div className="h-1/2 w-full flex items-center justify-center absolute bottom-0 left-0 bg-black animate-splash-bottom"></div>
    </div>
  );
}

function FlyDisplay({ onTransitionEnd }: { onTransitionEnd: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleTransitionEnd = () => {
    if (!visible) {
      onTransitionEnd();
    }
  };

  return (
    <div
      className={`absolute top-0 left-0 z-0 w-full h-full transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'
        }`}
      onTransitionEnd={handleTransitionEnd}
    >
      <img
        className="w-full h-full absolute top-0 left-0 object-cover"
        src={fly}
        alt=""
        style={{ filter: 'brightness(50%)', width: '100%', height: '100%', zIndex: 140 }}
      />
    </div>
  );
}



export default function Home() {
  const [loading, setLoading] = useState(true);
  const [flyload, setFly] = useState(true);
  const [flyDisplayVisible, setFlyDisplayVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setFly(false);
      }, 4000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleFlyDisplayTransitionEnd = () => {
    setFlyDisplayVisible(false);
  };

  return (
    <div className="relative">
      {loading && <LoadingOverlay />}
      <main className={`flex min-h-screen bg-white flex-col items-center justify-between p-24 ${inter.className} ${loading ? 'opacity-0' : 'opacity-100'}`} style={{ transition: 'opacity 500ms', zIndex: 100 }}>
        <div className="absolute top-0 left-0 z-0 w-full h-full">
          <img className="w-full h-full absolute top-0 left-0 object-cover" src={bgImage} alt="" style={{ filter: 'brightness(50%)', width: '100%', height: '100%' }} />
        </div>

        <Content />
      </main>

      {!loading && flyload && (
        <div className="absolute inset-0" style={{ zIndex: 150 }}>
          <SplashOverlay />
          <FlyDisplay onTransitionEnd={handleFlyDisplayTransitionEnd} />
        </div>
      )}
      {!loading && !flyload && (
        <nav className="fixed bottom-0 left-0 w-full bg-black rounded-t-xl overflow-hidden z-50" style={{ zIndex: loading ? -1 : 300, pointerEvents: loading ? 'none' : 'auto' }}>
          {isDayTime ? <NavbarDay /> : <NavbarHome />}
        </nav>
      )}
    </div>
  );
}
