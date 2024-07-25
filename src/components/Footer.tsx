import Image from 'next/image'
import LogoSVG from '@/components/Logo_svg'
import FacebookIcon from "/public/icon-facebook.svg"
import TwitterIcon from "/public/icon-twitter.svg"
import PinterestIcon from "/public/icon-pinterest.svg"
import InstagramIcon from "/public/icon-instagram.svg"

export default function Footer() {
    return (
        <footer className="bg-very_dark_blue flex justify-between w-full text-gray py-16 px-96">
            <LogoSVG fill="white" />

            <div className="grid grid-cols-3 gap-16">
                <div>
                    <p className="text-white font-bold">Features</p>
                    <p>Link Shortening</p>
                    <p>Branded Links</p>
                    <p>Analytics</p>
                </div>
                <div>
                    <p className="text-white font-bold">Resources</p>
                    <p>Blog</p>
                    <p>Developers</p>
                    <p>Support</p>
                </div>

                <div>
                    <p className="text-white font-bold">Company</p>
                    <p>About</p> 
                    <p>Our Team</p>
                    <p>Carrers</p>
                    <p>Contact</p>
                </div>
            </div>

            <div className="flex justify-center gap-4 items-start">
                <Image src={FacebookIcon} alt="Facebook Icon" />
                <Image src={TwitterIcon} alt="Twitter Icon" />
                <Image src={PinterestIcon} alt="Pinterest Icon" />
                <Image src={InstagramIcon} alt="Instagram Icon" />
            </div>
        </footer>
    )
}