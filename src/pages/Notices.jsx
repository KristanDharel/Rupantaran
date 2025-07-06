import { useLanguage } from "../components/LanguageContext";

const Notices = () => {
  const { language } = useLanguage();

  // Nepali content
  const nepaliContent = {
    pageTitle: "सूचनाहरू",
    filterTitle: "फिल्टर गर्नुहोस्",
    filters: [
      { id: 'all', name: 'सबै' },
      { id: 'news', name: 'समाचार' },
      { id: 'events', name: 'कार्यक्रम' },
      { id: 'vacancy', name: 'रिक्ति' },
      { id: 'urgent', name: 'अत्यावश्यक' }
    ],
    notices: [
      {
        id: 1,
        title: 'स्वास्थ्य शिविरको सूचना',
        category: 'events',
        date: '२०८० चैत १५',
        content: 'हामीले अर्घाखाँची जिल्लामा स्वास्थ्य शिविर आयोजना गर्दै छौं। स्थानीय बासिन्दाहरूलाई निशुल्क स्वास्थ्य जाँच र उपचार सेवा उपलब्ध गराइनेछ।',
        isUrgent: false
      },
      {
        id: 2,
        title: 'शिक्षक पदको रिक्ति',
        category: 'vacancy',
        date: '२०८० चैत १०',
        content: 'ग्रामीण क्षेत्रका विद्यालयहरूमा शिक्षक पदका लागि आवेदन आमन्त्रण गरिएको छ। इच्छुक उम्मेदवारहरूले हाम्रो कार्यालयमा सम्पर्क गर्न सक्नुहुनेछ।',
        isUrgent: false
      },
      {
        id: 3,
        title: 'आपत्कालीन बैठकको सूचना',
        category: 'urgent',
        date: '२०८० चैत १८',
        content: 'आगामी साता आपत्कालीन बैठक भईनेछ। सम्बन्धित सदस्यहरूलाई उपस्थित हुन अनुरोध गरिन्छ।',
        isUrgent: true
      },
      {
        id: 4,
        title: 'शिक्षा सामग्री वितरण कार्यक्रम',
        category: 'events',
        date: '२०८० फाल्गुन २८',
        content: 'ग्रामीण विद्यालयका विद्यार्थीहरूलाई शैक्षिक सामग्री वितरण कार्यक्रम आयोजना गरिनेछ।',
        isUrgent: false
      },
      {
        id: 5,
        title: 'स्वयंसेवकहरूको माग',
        category: 'vacancy',
        date: '२०८० फाल्गुन २०',
        content: 'हाम्रो आगामी परियोजनाका लागि स्वयंसेवकहरूको माग गरिएको छ। इच्छुक व्यक्तिहरूले फारम भर्न सक्नुहुनेछ।',
        isUrgent: false
      }
    ],
    viewMore: "थप हेर्नुहोस्",
    noNotices: "कुनै सूचना उपलब्ध छैन"
  };

  // English content
  const englishContent = {
    pageTitle: "Notices",
    filterTitle: "Filter By",
    filters: [
      { id: 'all', name: 'All' },
      { id: 'news', name: 'News' },
      { id: 'events', name: 'Events' },
      { id: 'vacancy', name: 'Vacancy' },
      { id: 'urgent', name: 'Urgent' }
    ],
    notices: [
      {
        id: 1,
        title: 'Health Camp Announcement',
        category: 'events',
        date: 'Chait 15, 2080',
        content: 'We are organizing a health camp in Arghakhanchi district. Free health checkup and treatment services will be provided to local residents.',
        isUrgent: false
      },
      {
        id: 2,
        title: 'Teacher Position Vacancy',
        category: 'vacancy',
        date: 'Chait 10, 2080',
        content: 'Applications are invited for teacher positions in rural schools. Interested candidates can contact our office.',
        isUrgent: false
      },
      {
        id: 3,
        title: 'Emergency Meeting Notice',
        category: 'urgent',
        date: 'Chait 18, 2080',
        content: 'An emergency meeting will be held next week. All concerned members are requested to attend.',
        isUrgent: true
      },
      {
        id: 4,
        title: 'Education Material Distribution Program',
        category: 'events',
        date: 'Falgun 28, 2080',
        content: 'Educational materials distribution program will be organized for students in rural schools.',
        isUrgent: false
      },
      {
        id: 5,
        title: 'Volunteers Required',
        category: 'vacancy',
        date: 'Falgun 20, 2080',
        content: 'Volunteers are needed for our upcoming project. Interested individuals can fill out the form.',
        isUrgent: false
      }
    ],
    viewMore: "View More",
    noNotices: "No notices available"
  };

  const content = language === 'nepali' ? nepaliContent : englishContent;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-primary">
        {content.pageTitle}
      </h1>

      {/* Filters */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-primary">
          {content.filterTitle}
        </h3>
        <div className="flex flex-wrap gap-3">
          {content.filters.map(filter => (
            <button
              key={filter.id}
              className="px-4 py-2 rounded-full bg-primary-light text-primary-dark hover:bg-primary hover:text-white transition-colors font-medium text-sm"
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      {/* Notices List */}
      <div className="space-y-6">
        {content.notices.length > 0 ? (
          content.notices.map(notice => (
            <div 
              key={notice.id} 
              className={`bg-white p-6 rounded-lg shadow-md ${notice.isUrgent ? 'border-l-4 border-red-500' : ''}`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {notice.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{notice.content}</p>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-light text-primary-dark text-sm font-medium mb-2">
                    {content.filters.find(f => f.id === notice.category)?.name}
                  </span>
                  <p className="text-gray-500 text-sm">{notice.date}</p>
                </div>
              </div>
              {notice.isUrgent && (
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                    {content.filters.find(f => f.id === 'urgent')?.name}
                  </span>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-gray-500">{content.noNotices}</p>
          </div>
        )}
      </div>

      {/* View More Button (if pagination needed) */}
      <div className="mt-12 text-center">
        <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition font-bold">
          {content.viewMore}
        </button>
      </div>
    </div>
  );
};

export default Notices;