import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-[#f0f2f5] text-black/60 text-sm font-medium px-6 py-10">
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-black/10 pb-8">
        {/* Explore */}
        <div className="flex flex-col items-start gap-2 group">
          <h2 className="font-bold text-black/80 text-base mb-1 group-hover:translate-x-1 transition-all duration-200">
            Explore
          </h2>
          <h3 className="cursor-pointer hover:text-black transition-all duration-200">About Us</h3>
          <h3 className="cursor-pointer hover:text-black transition-all duration-200">Contact</h3>
        </div>

        {/* Legal */}
        <div className="flex flex-col items-start gap-2 group">
          <h2 className="font-bold text-black/80 text-base mb-1 group-hover:translate-x-1 transition-all duration-200">
            Legal
          </h2>
          <h3 className="cursor-pointer hover:text-black transition-all duration-200">Privacy Policy</h3>
          <h3 className="cursor-pointer hover:text-black transition-all duration-200">Terms of Service</h3>
          <h3 className="cursor-pointer hover:text-black transition-all duration-200">Cookie Policy</h3>
        </div>

        {/* Connect */}
        <div className="flex flex-col items-start gap-3">
          <h2 className="font-bold text-black/80 text-base mb-1">Connect</h2>
          <div className="flex gap-4 text-xl">
            <a
              href="#"
              className="hover:scale-110 transition-transform duration-300 hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faFacebook} color="orange" />
            </a>
            <a
              href="#"
              className="hover:scale-110 transition-transform duration-300 hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faInstagram} color="orange" />
            </a>
            <a
              href="#"
              className="hover:scale-110 transition-transform duration-300 hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faTwitter} color="orange" />
            </a>
            <a
              href="#"
              className="hover:scale-110 transition-transform duration-300 hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faGithub} color="orange" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="pt-6 text-center text-xs font-semibold text-black/40">
        <span className="bg-gradient-to-r from-black to-orange-500 bg-clip-text text-transparent">
          Developed by Manoj Dolekar
        </span>{' '}
        • {new Date().getFullYear()}
      </div>
    </footer>
  );
}

export default Footer;
