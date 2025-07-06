import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Nepali content
  const nepaliContent = {
    title: "रूपान्तरणका लागि संसङ्गाई",
    navItems: [
      { path: "/", text: "गृहपृष्ठ" },
      { path: "/about", text: "हाम्रो बारेमा" },
      { path: "/projects", text: "परियोजनाहरू" },
      { path: "/team", text: "हाम्रो टोली" },
      { path: "/gallery", text: "ग्यालरी" },
      { path: "/contact", text: "सम्पर्क" },
      { path: "/notices", text: "सूचनाहरू" },
    ],
    menuButton: "मेनु",
    closeButton: "बन्द गर्नुहोस्",
  };

  // English content
  const englishContent = {
    title: "Sansangai for Transformation",
    navItems: [
      { path: "/", text: "Home" },
      { path: "/about", text: "About Us" },
      { path: "/projects", text: "Projects" },
      { path: "/team", text: "Our Team" },
      { path: "/gallery", text: "Gallery" },
      { path: "/contact", text: "Contact" },
      { path: "/notices", text: "Notices" },
    ],
    menuButton: "Menu",
    closeButton: "Close",
  };

  const content = language === "nepali" ? nepaliContent : englishContent;

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-2">
            {/* Replace with your actual logo path */}
            <img
              src="logo.png"
              alt="Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
            <span className="text-xl md:text-2xl font-bold">
              {content.title}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-4 lg:space-x-6">
                {content.navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="hover:underline text-sm lg:text-base"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 bg-white text-primary rounded-md text-sm font-medium"
            >
              {language === "nepali" ? "English" : "नेपाली"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 bg-white text-primary rounded-md text-xs font-medium"
            >
              {language === "nepali" ? "English" : "नेपाली"}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav>
              <ul className="flex flex-col space-y-3">
                {content.navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="block py-2 hover:bg-primary-dark px-2 rounded"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
