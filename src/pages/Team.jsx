import { useLanguage } from "../components/LanguageContext";

const Team = () => {
  const { language } = useLanguage();

  // Nepali content
  const nepaliContent = {
    pageTitle: "हाम्रो टोली",
    volunteersTitle: "हाम्रो स्वयंसेवकहरू",
    volunteersDescription:
      "हाम्रो संस्थाले नेपालभर ५०० भन्दा बढी समर्पित स्वयंसेवकहरूको नेटवर्क सञ्चालन गर्दछ। यी स्वयंसेवकहरू स्थानीय समुदायमा हाम्रा कार्यक्रमहरू कार्यान्वयन गर्न महत्वपूर्ण भूमिका खेल्छन्।",
    volunteerButton: "स्वयंसेवक बन्नुहोस्",
    stats: [
      { value: "५००+", label: "स्वयंसेवकहरू" },
      { value: "२०+", label: "जिल्लाहरू" },
      { value: "१००+", label: "गाउँपालिका" },
      { value: "१०,०००+", label: "घन्टा सेवा" },
    ],
    teamMembers: [
      {
        name: "Nischal Parajuli",
        role: "अध्यक्ष",
        bio: "१५ वर्षको सामाजिक कार्य अनुभव, शिक्षा र सामुदायिक विकासमा विशेषज्ञ",
        image: "/images/team1.jpg",
      },
      {
        name: "Simran Dharel",
        role: "उपाध्यक्ष",
        bio: "महिला सशक्तिकरण र बाल अधिकारमा सक्रिय, १० वर्षको अनुभव",
        image: "/images/team2.jpg",
      },
      {
        name: "Deepika Tiwari",
        role: "सचिव",
        bio: "स्वास्थ्य सेवा र जनस्वास्थ्यमा विशेषज्ञ, विभिन्न राष्ट्रिय परियोजनाहरूमा कार्य अनुभव",
        image: "/images/team3.jpg",
      },
      {
        name: "Sharmila Dhamala",
        role: "कोषाध्यक्ष",
        bio: "लेखा र वित्त व्यवस्थापनमा विशेषज्ञ, गैर-लाभकारी संस्थाहरूको लागि ८ वर्षको अनुभव",
        image: "/images/team4.jpg",
      },
      {
        name: "Shangita Dhamala",
        role: "सदस्य",
        bio: "युवा विकास र रोजगारी सिर्जनामा विशेषज्ञ",
        image: "/images/team5.jpg",
      },
      {
        name: "Shristhi Parajuli",
        role: "सदस्य",
        bio: "शिक्षा नीति र पाठ्यक्रम विकासमा विशेषज्ञ",
        image: "/images/team6.jpg",
      },
      {
        name: "Nistha Parajuli",
        role: "सदस्य",
        bio: "सामुदायिक संचार र जनचेतनामा विशेषज्ञ",
        image: "/images/team7.jpg",
      },
    ],
  };

  // English content
  const englishContent = {
    pageTitle: "Our Team",
    volunteersTitle: "Our Volunteers",
    volunteersDescription:
      "Our organization operates a network of more than 500 dedicated volunteers across Nepal. These volunteers play a crucial role in implementing our programs in local communities.",
    volunteerButton: "Become a Volunteer",
    stats: [
      { value: "500+", label: "Volunteers" },
      { value: "20+", label: "Districts" },
      { value: "100+", label: "Municipalities" },
      { value: "10,000+", label: "Service Hours" },
    ],
    teamMembers: [
      {
        name: "Nischal Parajuli",
        role: "Chairperson",
        bio: "15 years of experience in social work, specialist in education and community development",
        image: "/images/team1.jpg",
      },
      {
        name: "Simran Dharel",
        role: "Vice Chairperson",
        bio: "Active in women empowerment and child rights, 10 years of experience",
        image: "/images/team2.jpg",
      },
      {
        name: "Deepika Tiwari",
        role: "Secretary",
        bio: "Specialist in healthcare and public health, experience working on various national projects",
        image: "/images/team3.jpg",
      },
      {
        name: "Sharmila Dhamala",
        role: "Treasurer",
        bio: "Expert in accounting and financial management, 8 years of experience with non-profits",
        image: "/images/team4.jpg",
      },
      {
        name: "Shangita Dhamala",
        role: "Member",
        bio: "Specialist in youth development and employment generation",
        image: "/images/team5.jpg",
      },
      {
        name: "Shristhi Parajuli",
        role: "Member",
        bio: "Expert in education policy and curriculum development",
        image: "/images/team6.jpg",
      },
      {
        name: "Nistha Parajuli",
        role: "Member",
        bio: "Specialist in community communication and public awareness",
        image: "/images/team7.jpg",
      },
    ],
  };

  const content = language === "nepali" ? nepaliContent : englishContent;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-primary">
        {content.pageTitle}
      </h1>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1 text-primary">
                {member.name}
              </h3>
              <p className="text-primary-dark font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-gray-700">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Volunteers Section */}
      <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-primary">
          {content.volunteersTitle}
        </h2>
        <p className="text-lg mb-6">{content.volunteersDescription}</p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {content.stats.map((stat, index) => (
            <div key={index} className="bg-primary-light p-4 rounded-lg">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Volunteer Button */}
        <div className="mt-8 text-center">
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition font-bold">
            {content.volunteerButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
