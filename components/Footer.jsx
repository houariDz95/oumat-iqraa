import { footerLinks } from "@/constants"
import {AiFillFacebook} from "react-icons/ai";
import {FaTiktok} from "react-icons/fa"
const Footer = () => {
    return (
        <footer className="bg-gray-200 py-4 px-4 mt-20">
        <div className="max-w-4xl mx-auto">
          <nav className="flex flex-wrap justify-between">
            {footerLinks.map((section, index) => (
              <div key={index} className="mr-4 mb-4">
                <p className="text-gray-600 font-medium mb-2">{section.title}</p>
                <ul className="space-y-2">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        className="text-gray-600 hover:text-gray-800"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          <div className="flex justify-between flex-col-reverse md:flex-row gap-4 w-full p-4 mt-8 items-center">
            <div className="flex items-center gap-4">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100052895390979" ><AiFillFacebook size={22} color="blue" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@oumat.iqraa"><FaTiktok size={22} color="black"/></a>
            </div>
           <div>
            <p className="w-full text-sm font-normal"> Made With 💜 By Eddrief Houari &copy; {new Date().getFullYear()}</p>
           </div>
          </div>
        </div>
      </footer>
    );
  };

export default Footer