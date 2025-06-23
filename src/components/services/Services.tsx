import './Header.css';
import ServiceCard  from './ServiceCard';


const servicesData = [
    { id: 1, title: "ROOFING", image: "/path/to/roofing-image.jpg" },
    { id: 2, title: "SIDING", image: "/path/to/siding-image.jpg" },
    { id: 3, title: "GUTTERS", image: "/path/to/gutters-image.jpg" },
    { id: 4, title: "WINDOWS", image: "/path/to/windows-image.jpg" },
    { id: 5, title: "DECKS", image: "/path/to/decks-image.jpg" },
    { id: 6, title: "REMODELS", image: "/path/to/remodels-image.jpg" },
];


const Services = () => {
  return (
    <header className="services">
      <div className="services_header">
        <div className="services_header_divider"></div>
        <div className="services_header_text">
            <p>SERVICES</p>
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