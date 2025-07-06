

import { useLanguage } from "./LanguageContext";

// export default Footer;

const Footer = () => {
  const { language } = useLanguage();

  // Nepali content
  const nepaliContent = {
    organizationName: "रूपान्तरणका लागि संसङ्गाई",
    tagline: "समाजमा सकारात्मक परिवर्तन ल्याउने हाम्रो संघर्ष",
    helpTitle: "तपाईंलाई मद्दत गर्न",
    helpLinks: [
      { text: "दान गर्नुहोस्", url: "#" },
      { text: "स्वयंसेवक बन्नुहोस्", url: "#" },
      { text: "सहयोग गर्नुहोस्", url: "#" },
    ],
    contactTitle: "सम्पर्क",
    contactInfo: [
      "ईमेल: info@rupantaran.org",
      "फोन: +९७७ ९८XXXXXXXX",
      "ठेगाना: काठमाडौं, नेपाल",
    ],
    copyright: `© ${new Date().getFullYear()} Managed by Kristan Dharel | +977 9841213702`,
  };

  // English content
  const englishContent = {
    organizationName: "Sansangai for Transformation",
    tagline: "Our struggle to bring positive change in society",
    helpTitle: "How You Can Help",
    helpLinks: [
      { text: "Donate", url: "#" },
      { text: "Volunteer", url: "#" },
      { text: "Collaborate", url: "#" },
    ],
    contactTitle: "Contact Us",
    contactInfo: [
      "Email: info@rupantaran.org",
      "Phone: +977 98XXXXXXXX",
      "Address: Kathmandu, Nepal",
    ],
    copyright: `© ${new Date().getFullYear()} Managed by Kristan Dharel | +977 9841213702`,
  };

  const content = language === "nepali" ? nepaliContent : englishContent;

  return (
    <footer className="bg-primary-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {content.organizationName}
            </h3>
            <p>{content.tagline}</p>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{content.helpTitle}</h3>
            <ul className="space-y-2">
              {content.helpLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="hover:underline">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{content.contactTitle}</h3>
            {content.contactInfo.map((info, index) => (
              <p key={index}>{info}</p>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-light mt-8 pt-6 text-center">
          <p>{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
