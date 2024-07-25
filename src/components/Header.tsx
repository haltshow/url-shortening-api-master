import Image from 'next/image'
import logo from '/public/logo.svg' 

export default function Header() {
    return (
        <header className="w-full text-base text-grayish_violet py-16 px-96">
            <nav className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-8">
                    <Image src={logo} alt="Shortly Logo" />
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Resources</p>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <button className="bg-transparent py-2 px-4 rounded-full">
                        Login
                    </button> 
                    <button className="bg-cyan py-2 px-4 rounded-full text-blue-50">
                        Sign Up
                    </button>
                </div>
            </nav>
        </header>
    )
}