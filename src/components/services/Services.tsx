import './Services.css';
import ServiceCard  from './ServiceCard';


const servicesData = [
    { id: 1, title: "ROOFING", image: "/images/Roofing.png" },
    { id: 2, title: "SIDING", image: "/images/Siding.png" },
    { id: 3, title: "GUTTERS", image: "/images/Gutter.png" },
    { id: 4, title: "WINDOWS", image: "/images/Window.png" },
    { id: 5, title: "DECKS", image: "/images/Deck.png" },
    { id: 6, title: "REMODELS", image: "/images/Remodel.png" },
];


const Services = () => {
  return (
    <header className="services">
      <div className="services_header">
        <div className="services_header_divider"></div>
        <div className="services_header_text">
            <p>OUR SERVICES</p>
        </div>
      </div>
      <div className="services_grid">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </header>
  );
};

export default Services;