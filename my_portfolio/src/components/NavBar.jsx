import VVLogo from "../assets/VVLogo.jpg";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";




const NavBar = () =>{
    return(
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
            <img className="w-20 h-20" src={VVLogo} alt="logo"/>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/venkatesh-veerala-b5721a222/"><FaLinkedin/></a>
                <a href="https://github.com/Venkatesh002-web"><FaGithub/></a>
                <a href="https://x.com/Venkate60713855"><FaSquareXTwitter/></a>
            </div>


        </nav>
                );
            }

export default NavBar;