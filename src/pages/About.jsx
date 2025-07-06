import { useLanguage } from "../components/LanguageContext";


const About = () => {
  const { language } = useLanguage();

  // Nepali content
  const nepaliContent = {
    pageTitle: "हाम्रो संस्था को बारेमा",
    history: {
      title: "हाम्रो इतिहास",
      paragraphs: [
        "रूपान्तरणका लागि संसङ्गाई संस्था सन् २०१० मा स्थापना भएको हो। सुरुवाती दिनमा सानो समूहको रूपमा सुरु गरिएको यस संस्थाले समयको साथमा नेपालभर विस्तार गरेको छ। हामीले विभिन्न सामाजिक मुद्दाहरूमा काम गर्दै समुदायमा सकारात्मक परिवर्तन ल्याउने प्रयास गर्दछौं।",
        "हाम्रो संस्थाले विगत १० वर्षभर नेपालका विभिन्न भागहरूमा ५० भन्दा बढी परियोजनाहरू सफलतापूर्वक सम्पन्न गरिसकेका छौं जसले लाखौं मानिसहरूको जीवनमा सकारात्मक प्रभाव पारेको छ।"
      ]
    },
    objectives: {
      title: "हाम्रो उद्देश्य",
      paragraph: "हाम्रो मुख्य उद्देश्य नेपाली समाजमा सामाजिक, आर्थिक, राजनीतिक र शैक्षिक क्षेत्रमा सकारात्मक परिवर्तन ल्याउनु हो। हामीले विशेष गरी गरिबी रेखामुनिका परिवारहरू, महिलाहरू, बालबालिका र वंचित समुदायहरूलाई प्राथमिकतामा राख्दछौं।",
      listItems: [
        "स्वास्थ्य सेवामा सबैको पहुँच सुनिश्चित गर्ने",
        "गुणस्तरीय शिक्षाको अवसर प्रदान गर्ने",
        "महिला र युवाहरूलाई सशक्त बनाउने",
        "सामुदायिक विकासमा सहभागिता बढाउने",
        "आर्थिक स्वावलम्बनका लागि अवसर सिर्जना गर्ने"
      ]
    },
    approach: {
      title: "हाम्रो दृष्टिकोण",
      paragraph: "हामी विश्वास गर्छौं कि प्रत्येक व्यक्तिले गरिबी, भेदभाव र अशिक्षाबाट मुक्त जीवन बिताउन पाउनुपर्छ। हाम्रो दृष्टिकोण सहभागितामूलक विकासको हो, जहाँ समुदायका सदस्यहरू आफ्नै विकास प्रक्रियामा सक्रिय भाग लिन्छन्।",
      cards: [
        {
          title: "मूल्य",
          content: "पारदर्शिता, जवाफदेहिता, समावेशीकरण र नैतिकता हाम्रा मूल आधारहरू हुन्"
        },
        {
          title: "मिशन",
          content: "समाजमा सकारात्मक परिवर्तन ल्याउन सामुदायिक सशक्तिकरण गर्ने"
        },
        {
          title: "दृष्टि",
          content: "एउटा न्यायपूर्ण, समतामूलक र विकसित समाजको निर्माण"
        }
      ]
    }
  };

  // English content
  const englishContent = {
    pageTitle: "About Our Organization",
    history: {
      title: "Our History",
      paragraphs: [
        "Sansangai for Transformation was established in 2010. Starting as a small group, our organization has expanded throughout Nepal over time. We work on various social issues to bring positive changes in the community.",
        "Over the past 10 years, our organization has successfully completed more than 50 projects in different parts of Nepal that have positively impacted millions of people's lives."
      ]
    },
    objectives: {
      title: "Our Objectives",
      paragraph: "Our main objective is to bring positive changes in social, economic, political and educational sectors of Nepali society. We particularly prioritize families below poverty line, women, children and disadvantaged communities.",
      listItems: [
        "Ensure everyone's access to health services",
        "Provide quality education opportunities",
        "Empower women and youth",
        "Increase participation in community development",
        "Create opportunities for economic self-reliance"
      ]
    },
    approach: {
      title: "Our Approach",
      paragraph: "We believe that every individual should have the right to live a life free from poverty, discrimination and illiteracy. Our approach is participatory development where community members actively participate in their own development process.",
      cards: [
        {
          title: "Values",
          content: "Transparency, accountability, inclusion and ethics are our fundamental bases"
        },
        {
          title: "Mission",
          content: "To bring positive change in society through community empowerment"
        },
        {
          title: "Vision",
          content: "Building a just, equitable and developed society"
        }
      ]
    }
  };

  const content = language === 'nepali' ? nepaliContent : englishContent;

  // return (
  //   <div className="container mx-auto px-4 py-12">
  //     <h1 className="text-4xl font-bold text-center mb-12 text-primary">
  //       {content.pageTitle}
  //     </h1>
      
  //     <div className="bg-white p-8 rounded-lg shadow-md mb-12">
  //       <h2 className="text-2xl font-bold mb-4 text-primary">
  //         {content.history.title}
  //       </h2>
  //       {content.history.paragraphs.map((paragraph, index) => (
  //         <p key={index} className="text-lg mb-6">
  //           {paragraph}
  //         </p>
  //       ))}
  //     </div>

  //     <div className="bg-white p-8 rounded-lg shadow-md mb-12">
  //       <h2 className="text-2xl font-bold mb-4 text-primary">
  //         {content.objectives.title}
  //       </h2>
  //       <p className="text-lg mb-6">
  //         {content.objectives.paragraph}
  //       </p>
  //       <ul className="list-disc pl-6 space-y-2 text-lg">
  //         {content.objectives.listItems.map((item, index) => (
  //           <li key={index}>{item}</li>
  //         ))}
  //       </ul>
  //     </div>

  //     <div className="bg-white p-8 rounded-lg shadow-md">
  //       <h2 className="text-2xl font-bold mb-4 text-primary">
  //         {content.approach.title}
  //       </h2>
  //       <p className="text-lg mb-6">
  //         {content.approach.paragraph}
  //       </p>
  //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  //         {content.approach.cards.map((card, index) => (
  //           <div key={index} className="bg-primary-light p-4 rounded-lg">
  //             <h3 className="font-bold text-lg mb-2">{card.title}</h3>
  //             <p>{card.content}</p>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-primary">
        {content.pageTitle}
      </h1>
      
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-primary">
          {content.history.title}
        </h2>
        {content.history.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-base sm:text-lg mb-4 sm:mb-6">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-primary">
          {content.objectives.title}
        </h2>
        <p className="text-base sm:text-lg mb-4 sm:mb-6">
          {content.objectives.paragraph}
        </p>
        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-base sm:text-lg">
          {content.objectives.listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-primary">
          {content.approach.title}
        </h2>
        <p className="text-base sm:text-lg mb-6">
          {content.approach.paragraph}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {content.approach.cards.map((card, index) => (
            <div key={index} className="bg-primary-light p-4 sm:p-6 rounded-lg">
              <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">{card.title}</h3>
              <p className="text-sm sm:text-base">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default About;