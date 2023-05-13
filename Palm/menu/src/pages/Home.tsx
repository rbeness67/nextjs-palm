import Link from 'next/link';

const Home: React.FC = () => {
    return (
        <div>
            {/* Logo */}
            <img src="/logo.png" alt="Logo" />

            {/* Navbar */}
            <nav>
                <ul>
                    <li>
                        <Link href="/page1">
                            <a>Page 1</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page2">
                            <a>Page 2</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;