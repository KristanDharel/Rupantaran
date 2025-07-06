// const Projects = () => {
//   const ongoingProjects = [
//     {
//       title: 'स्वस्थ गाउँ कार्यक्रम',
//       description: 'ग्रामीण क्षेत्रका १० गाउँपालिकामा स्वास्थ्य सेवा पहुँच गराउने कार्यक्रम',
//       location: 'सिन्धुपाल्चोक, दोलखा, रामेछाप',
//       beneficiaries: '५०,००० भन्दा बढी',
//       image: '/images/project-health.jpg'
//     },
//     {
//       title: 'शिक्षा सामग्री वितरण',
//       description: 'ग्रामीण विद्यालयका १०,००० विद्यार्थीहरूलाई शैक्षिक सामग्री उपलब्ध गराउने',
//       location: 'नेपालभरका २० जिल्ला',
//       beneficiaries: '१०,००० विद्यार्थी',
//       image: '/images/project-education.jpg'
//     },
//     {
//       title: 'महिला सशक्तिकरण',
//       description: 'महिलाहरूलाई व्यावसायिक प्रशिक्षण र साना ऋण उपलब्ध गराउने',
//       location: 'मध्यमाञ्चल विकास क्षेत्र',
//       beneficiaries: '५,००० महिला',
//       image: '/images/project-women.jpg'
//     }
//   ]

import { useLanguage } from "../components/LanguageContext";

//   const completedProjects = [
//     {
//       title: 'आपत्कालीन राहत',
//       description: '२०१५ को भूकम्प पीडितहरूलाई राहत सामग्री वितरण',
//       year: '२०१५-२०१६',
//       beneficiaries: '२५,००० परिवार'
//     },
//     {
//       title: 'स्वच्छ पानी परियोजना',
//       description: 'ग्रामीण क्षेत्रमा स्वच्छ पानीको पहुँच सुनिश्चित गर्ने',
//       year: '२०१८-२०१९',
//       beneficiaries: '१० गाउँपालिका'
//     },
//     {
//       title: 'बाल शिक्षा कार्यक्रम',
//       description: 'ग्रामीण क्षेत्रका बालबालिकाहरूलाई शिक्षाको अवसर प्रदान गर्ने',
//       year: '२०१७-२०२०',
//       beneficiaries: '५,००० बालबालिका'
//     }
//   ]

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold text-center mb-12 text-primary">हाम्रा परियोजनाहरू</h1>
      
//       <section className="mb-16">
//         <h2 className="text-3xl font-bold mb-8 text-primary">चलिरहेका परियोजनाहरू</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {ongoingProjects.map((project, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//               <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
//                 <p className="mb-4">{project.description}</p>
//                 <div className="space-y-2 text-sm">
//                   <p><span className="font-semibold">स्थान:</span> {project.location}</p>
//                   <p><span className="font-semibold">लाभान्वित:</span> {project.beneficiaries}</p>
//                 </div>
//                 <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition">
//                   थप जानकारी
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section>
//         <h2 className="text-3xl font-bold mb-8 text-primary">सम्पन्न परियोजनाहरू</h2>
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <table className="w-full">
//             <thead className="bg-primary text-white">
//               <tr>
//                 <th className="py-3 px-4 text-left">परियोजना</th>
//                 <th className="py-3 px-4 text-left">विवरण</th>
//                 <th className="py-3 px-4 text-left">वर्ष</th>
//                 <th className="py-3 px-4 text-left">लाभान्वित</th>
//               </tr>
//             </thead>
//             <tbody>
//               {completedProjects.map((project, index) => (
//                 <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
//                   <td className="py-3 px-4 font-semibold">{project.title}</td>
//                   <td className="py-3 px-4">{project.description}</td>
//                   <td className="py-3 px-4">{project.year}</td>
//                   <td className="py-3 px-4">{project.beneficiaries}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Projects

const Projects = () => {
  const { language } = useLanguage();

  // Nepali content
  const nepaliContent = {
    pageTitle: "हाम्रा परियोजनाहरू",
    ongoingTitle: "चलिरहेका परियोजनाहरू",
    completedTitle: "सम्पन्न परियोजनाहरू",
    viewDetails: "थप जानकारी",
    tableHeaders: ["परियोजना", "विवरण", "वर्ष", "लाभान्वित"],
    ongoingProjects: [
      {
        title: 'स्वस्थ गाउँ कार्यक्रम',
        description: 'ग्रामीण क्षेत्रका १० गाउँपालिकामा स्वास्थ्य सेवा पहुँच गराउने कार्यक्रम',
        location: 'सिन्धुपाल्चोक, दोलखा, रामेछाप',
        beneficiaries: '५०,००० भन्दा बढी',
        image: '/images/project-health.jpg',
        locationLabel: 'स्थान:',
        beneficiariesLabel: 'लाभान्वित:'
      },
      {
        title: 'शिक्षा सामग्री वितरण',
        description: 'ग्रामीण विद्यालयका १०,००० विद्यार्थीहरूलाई शैक्षिक सामग्री उपलब्ध गराउने',
        location: 'नेपालभरका २० जिल्ला',
        beneficiaries: '१०,००० विद्यार्थी',
        image: '/images/project-education.jpg',
        locationLabel: 'स्थान:',
        beneficiariesLabel: 'लाभान्वित:'
      },
      {
        title: 'महिला सशक्तिकरण',
        description: 'महिलाहरूलाई व्यावसायिक प्रशिक्षण र साना ऋण उपलब्ध गराउने',
        location: 'मध्यमाञ्चल विकास क्षेत्र',
        beneficiaries: '५,००० महिला',
        image: '/images/project-women.jpg',
        locationLabel: 'स्थान:',
        beneficiariesLabel: 'लाभान्वित:'
      }
    ],
    completedProjects: [
      {
        title: 'आपत्कालीन राहत',
        description: '२०१५ को भूकम्प पीडितहरूलाई राहत सामग्री वितरण',
        year: '२०१५-२०१६',
        beneficiaries: '२५,००० परिवार'
      },
      {
        title: 'स्वच्छ पानी परियोजना',
        description: 'ग्रामीण क्षेत्रमा स्वच्छ पानीको पहुँच सुनिश्चित गर्ने',
        year: '२०१८-२०१९',
        beneficiaries: '१० गाउँपालिका'
      },
      {
        title: 'बाल शिक्षा कार्यक्रम',
        description: 'ग्रामीण क्षेत्रका बालबालिकाहरूलाई शिक्षाको अवसर प्रदान गर्ने',
        year: '२०१७-२०२०',
        beneficiaries: '५,००० बालबालिका'
      }
    ]
  };

  // English content
  const englishContent = {
    pageTitle: "Our Projects",
    ongoingTitle: "Ongoing Projects",
    completedTitle: "Completed Projects",
    viewDetails: "View Details",
    tableHeaders: ["Project", "Description", "Year", "Beneficiaries"],
    ongoingProjects: [
      {
        title: 'Healthy Village Program',
        description: 'Program to provide health services in 10 rural municipalities',
        location: 'Sindhupalchok, Dolakha, Ramechhap',
        beneficiaries: 'More than 50,000',
        image: '/images/project-health.jpg',
        locationLabel: 'Location:',
        beneficiariesLabel: 'Beneficiaries:'
      },
      {
        title: 'Education Material Distribution',
        description: 'Providing educational materials to 10,000 students in rural schools',
        location: '20 districts across Nepal',
        beneficiaries: '10,000 students',
        image: '/images/project-education.jpg',
        locationLabel: 'Location:',
        beneficiariesLabel: 'Beneficiaries:'
      },
      {
        title: 'Women Empowerment',
        description: 'Providing vocational training and small loans to women',
        location: 'Central Development Region',
        beneficiaries: '5,000 women',
        image: '/images/project-women.jpg',
        locationLabel: 'Location:',
        beneficiariesLabel: 'Beneficiaries:'
      }
    ],
    completedProjects: [
      {
        title: 'Emergency Relief',
        description: 'Distribution of relief materials to 2015 earthquake victims',
        year: '2015-2016',
        beneficiaries: '25,000 families'
      },
      {
        title: 'Clean Water Project',
        description: 'Ensuring access to clean water in rural areas',
        year: '2018-2019',
        beneficiaries: '10 rural municipalities'
      },
      {
        title: 'Child Education Program',
        description: 'Providing education opportunities to children in rural areas',
        year: '2017-2020',
        beneficiaries: '5,000 children'
      }
    ]
  };

  const content = language === 'nepali' ? nepaliContent : englishContent;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-primary">
        {content.pageTitle}
      </h1>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-primary">
          {content.ongoingTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.ongoingProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {project.title}
                </h3>
                <p className="mb-4">{project.description}</p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">{project.locationLabel}</span> {project.location}
                  </p>
                  <p>
                    <span className="font-semibold">{project.beneficiariesLabel}</span> {project.beneficiaries}
                  </p>
                </div>
                <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition">
                  {content.viewDetails}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-primary">
          {content.completedTitle}
        </h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-primary text-white">
              <tr>
                {content.tableHeaders.map((header, index) => (
                  <th key={index} className="py-3 px-4 text-left">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.completedProjects.map((project, index) => (
                <tr 
                  key={index} 
                  className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                >
                  <td className="py-3 px-4 font-semibold">{project.title}</td>
                  <td className="py-3 px-4">{project.description}</td>
                  <td className="py-3 px-4">{project.year}</td>
                  <td className="py-3 px-4">{project.beneficiaries}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Projects;