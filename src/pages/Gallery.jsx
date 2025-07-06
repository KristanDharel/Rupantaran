import { useLanguage } from "../components/LanguageContext";

const Gallery = () => {
  const { language } = useLanguage();

  // Nepali content
  const nepaliContent = {
    pageTitle: "हाम्रो ग्यालरी",
    categories: [
      { id: "all", name: "सबै" },
      { id: "events", name: "कार्यक्रमहरू" },
      { id: "community", name: "समुदाय" },
      { id: "team", name: "टोली" },
    ],
    photos: [
      {
        id: 1,
        title: "स्वास्थ्य शिविर",
        category: "events",
        image: "/images/gallery/health-camp.jpg",
      },
      {
        id: 2,
        title: "शिक्षा सामग्री वितरण",
        category: "community",
        image: "/images/gallery/education-materials.jpg",
      },
      {
        id: 3,
        title: "टोली बैठक",
        category: "team",
        image: "/images/gallery/team-meeting.jpg",
      },
      {
        id: 4,
        title: "सामुदायिक कार्यशाला",
        category: "events",
        image: "/images/gallery/community-workshop.jpg",
      },
      {
        id: 5,
        title: "स्वयंसेवक प्रशिक्षण",
        category: "team",
        image: "/images/gallery/volunteer-training.jpg",
      },
      {
        id: 6,
        title: "बाल शिक्षा कार्यक्रम",
        category: "community",
        image: "/images/gallery/child-education.jpg",
      },
      {
        id: 7,
        title: "आपत्कालीन राहत",
        category: "community",
        image: "/images/gallery/emergency-relief.jpg",
      },
      {
        id: 8,
        title: "वार्षिक कार्यक्रम",
        category: "events",
        image: "/images/gallery/annual-event.jpg",
      },
    ],
    viewMore: "थप हेर्नुहोस्",
  };

  // English content
  const englishContent = {
    pageTitle: "Our Gallery",
    categories: [
      { id: "all", name: "All" },
      { id: "events", name: "Events" },
      { id: "community", name: "Community" },
      { id: "team", name: "Team" },
    ],
    photos: [
      {
        id: 1,
        title: "Health Camp",
        category: "events",
        image: "img1.jpg",
      },
      {
        id: 2,
        title: "Education Material Distribution",
        category: "community",
        image: "img2.jpg",
      },
      {
        id: 3,
        title: "Team Meeting",
        category: "team",
        image: "img3.jpg",
      },
      {
        id: 4,
        title: "Community Workshop",
        category: "events",
        image: "img4.jpg",
      },
      {
        id: 5,
        title: "Volunteer Training",
        category: "team",
        image: "img5.jpg",
      },
      {
        id: 6,
        title: "Child Education Program",
        category: "community",
        image: "img6.jpg",
      },
      {
        id: 7,
        title: "Emergency Relief",
        category: "community",
        image: "img7.jpg",
      },
      {
        id: 8,
        title: "Annual Event",
        category: "events",
        image: "img8.jpg",
      },
    ],
    viewMore: "View More",
  };

  const content = language === "nepali" ? nepaliContent : englishContent;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-primary">
        {content.pageTitle}
      </h1>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {content.categories.map((category) => (
          <button
            key={category.id}
            className="px-6 py-2 rounded-full bg-primary-light text-primary-dark hover:bg-primary hover:text-white transition-colors font-medium"
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {content.photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={photo.image}
              alt={photo.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white font-bold text-lg">{photo.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-12">
        <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition font-bold">
          {content.viewMore}
        </button>
      </div>
    </div>
  );
};

export default Gallery;
