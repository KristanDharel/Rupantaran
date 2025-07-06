import ImageSlider from "../components/ImageSlider";
import { useLanguage } from "../components/LanguageContext";

const Home = () => {
  const { language } = useLanguage();

  // Nepali content
  const nepaliContent = {
    sliderImages: [
      {
        src: "img1.jpg",
        alt: "Community work",
        title: "समुदायमा सकारात्मक परिवर्तन",
        description: "हामी समुदायमा सकारात्मक परिवर्तन ल्याउने प्रयास गर्दछौं",
      },
      {
        src: "img2.jpg",
        alt: "Education program",
        title: "शिक्षा कार्यक्रम",
        description: "ग्रामीण क्षेत्रका बच्चाहरूलाई शिक्षा प्रदान गर्दै",
      },
      {
        src: "img4.jpg",
        alt: "Health camp",
        title: "स्वास्थ्य शिविर",
        description: "निशुल्क स्वास्थ्य जाँच र उपचार सेवा",
      },
    ],
    activities: [
      {
        title: "स्वास्थ्य",
        description:
          "ग्रामीण क्षेत्रमा स्वास्थ्य शिविर, स्वास्थ्य शिक्षा कार्यक्रम र आवश्यक स्वास्थ्य सेवा प्रदान गर्ने",
        icon: "🏥",
      },
      {
        title: "शिक्षा",
        description:
          "शैक्षिक सामग्री वितरण, विद्यालय निर्माण, छात्रवृत्ति कार्यक्रम र शिक्षक प्रशिक्षण",
        icon: "📚",
      },
      {
        title: "सामाजिक",
        description:
          "महिला सशक्तिकरण, बाल अधिकार, सामुदायिक विकास र सामाजिक न्यायका कार्यक्रम",
        icon: "👥",
      },
      {
        title: "आर्थिक",
        description:
          "साना व्यवसायहरूलाई सहयोग, रोजगारी सिर्जना र आय आर्जनका कार्यक्रम",
        icon: "💰",
      },
    ],
    currentProjects: [
      {
        title: "स्वस्थ गाउँ कार्यक्रम",
        description: "५ गाउँपालिकामा स्वास्थ्य सेवा पहुँच गराउने कार्यक्रम",
        progress: 65,
      },
      {
        title: "शिक्षा सामग्री वितरण",
        description: "१००० विद्यार्थीहरूलाई शैक्षिक सामग्री उपलब्ध गराउने",
        progress: 85,
      },
      {
        title: "महिला सशक्तिकरण",
        description: "महिलाहरूलाई व्यावसायिक प्रशिक्षण र साना ऋण उपलब्ध गराउने",
        progress: 45,
      },
    ],
    upcomingActivities: [
      {
        title: "सामुदायिक स्वच्छता अभियान",
        date: "२०८१ असोज १५",
        location: "काठमाडौँ, नेपाल",
        description: "स्थानीय स्तरमा स्वच्छता जागरूकता कार्यक्रम",
      },
      {
        title: "युवा कौशल विकास प्रशिक्षण",
        date: "२०८१ कार्तिक ५",
        location: "ललितपुर, नेपाल",
        description: "युवाहरूलाई कौशल विकास प्रशिक्षण दिने कार्यक्रम",
      },
      {
        title: "निशुल्क स्वास्थ्य जाँच शिविर",
        date: "२०८१ मंसिर २०",
        location: "भक्तपुर, नेपाल",
        description: "ग्रामीण क्षेत्रका बासिन्दाहरूलाई निशुल्क स्वास्थ्य सेवा",
      },
    ],
    aboutTitle: "हाम्रो संस्था को बारेमा",
    aboutText1:
      "रूपान्तरणका लागि संसङ्गाई नेपालमा सामाजिक, आर्थिक, राजनीतिक र शैक्षिक क्षेत्रमा सकारात्मक परिवर्तन ल्याउने उद्देश्यले स्थापित एक गैर-लाभकारी संस्था हो। हामी विभिन्न सामुदायिक विकासका कार्यक्रमहरू मार्फत समाजमा सकारात्मक परिवर्तन ल्याउने प्रयास गर्दछौं।",
    aboutText2:
      "हाम्रो संस्थाले विशेष गरी ग्रामीण क्षेत्रका वंचित समुदायहरूलाई केन्द्रित गरी कार्यक्रम संचालन गर्दछ। स्वास्थ्य, शिक्षा, महिला सशक्तिकरण, युवा विकास, र आर्थिक सशक्तिकरण हाम्रा प्रमुख कार्यक्षेत्रहरू हुन्।",
    activitiesTitle: "हाम्रा गतिविधिहरू",
    projectsTitle: "हालैका परियोजनाहरू",
    upcomingTitle: "आगामी गतिविधिहरू",
  };

  // English content
  const englishContent = {
    sliderImages: [
      {
        src: "img1.jpg",
        alt: "Community work",
        title: "Positive Change in Community",
        description: "We strive to bring positive changes in the community",
      },
      {
        src: "img2.jpg",
        alt: "Education program",
        title: "Education Program",
        description: "Providing education to children in rural areas",
      },
      {
        src: "img4.jpg",
        alt: "Health camp",
        title: "Health Camp",
        description: "Free health checkup and treatment services",
      },
    ],
    activities: [
      {
        title: "Health",
        description:
          "Health camps in rural areas, health education programs and essential health services",
        icon: "🏥",
      },
      {
        title: "Education",
        description:
          "Educational material distribution, school construction, scholarship programs and teacher training",
        icon: "📚",
      },
      {
        title: "Social",
        description:
          "Women empowerment, child rights, community development and social justice programs",
        icon: "👥",
      },
      {
        title: "Economic",
        description:
          "Support for small businesses, employment generation and income generation programs",
        icon: "💰",
      },
    ],
    currentProjects: [
      {
        title: "Healthy Village Program",
        description:
          "Program to provide health services in 5 rural municipalities",
        progress: 65,
      },
      {
        title: "Education Material Distribution",
        description: "Providing educational materials to 1000 students",
        progress: 85,
      },
      {
        title: "Women Empowerment",
        description: "Providing vocational training and small loans to women",
        progress: 45,
      },
    ],
    upcomingActivities: [
      {
        title: "Community Cleanliness Campaign",
        date: "October 1, 2024",
        location: "Kathmandu, Nepal",
        description: "Local level cleanliness awareness program",
      },
      {
        title: "Youth Skill Development Training",
        date: "October 20, 2024",
        location: "Lalitpur, Nepal",
        description: "Skill development training program for youth",
      },
      {
        title: "Free Health Checkup Camp",
        date: "December 5, 2024",
        location: "Bhaktapur, Nepal",
        description: "Free health services for rural community members",
      },
    ],
    aboutTitle: "About Our Organization",
    aboutText1:
      "Sansangai for Transformation is a non-profit organization established with the objective of bringing positive changes in social, economic, political and educational sectors in Nepal. We strive to bring positive changes in society through various community development programs.",
    aboutText2:
      "Our organization focuses especially on disadvantaged communities in rural areas. Health, education, women empowerment, youth development and economic empowerment are our key areas of work.",
    activitiesTitle: "Our Activities",
    projectsTitle: "Current Projects",
    upcomingTitle: "Upcoming Activities",
  };

  const content = language === "nepali" ? nepaliContent : englishContent;

  return (
    <div className="space-y-12">
      {/* Hero Slider - Responsive by default */}
      <section className="w-full">
        <ImageSlider images={content.sliderImages} />
      </section>

      {/* Introduction - Responsive padding and text sizing */}
      <section className="container mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-primary">
          {content.aboutTitle}
        </h2>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <p className="text-base sm:text-lg mb-3 sm:mb-4">
            {content.aboutText1}
          </p>
          <p className="text-base sm:text-lg">{content.aboutText2}</p>
        </div>
      </section>

      {/* Activities - Responsive grid and padding */}
      <section className="bg-gray-100 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-primary">
            {content.activitiesTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {content.activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {activity.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-primary">
                  {activity.title}
                </h3>
                <p className="text-sm sm:text-base">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects - Responsive layout */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-primary">
          {content.projectsTitle}
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {content.currentProjects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 sm:p-6"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1 sm:gap-0">
                <h3 className="text-lg sm:text-xl font-bold text-primary">
                  {project.title}
                </h3>
                <span className="font-bold text-sm sm:text-base">
                  {project.progress}%
                </span>
              </div>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                {project.description}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
                <div
                  className="bg-primary h-full rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Activities - Responsive grid and cards */}
      <section className="bg-gray-100 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-primary">
            {content.upcomingTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {content.upcomingActivities.map((activity, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary">
                  {activity.title}
                </h3>
                <div className="flex items-center mb-1 sm:mb-2">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-600">
                    {activity.date}
                  </span>
                </div>
                <div className="flex items-center mb-2 sm:mb-3">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-600">
                    {activity.location}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                  {activity.description}
                </p>
                <button className="mt-2 sm:mt-4 bg-primary text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-primary-dark transition-colors text-sm sm:text-base">
                  {language === "nepali" ? "थप जानकारी" : "Learn More"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
