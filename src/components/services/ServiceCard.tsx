interface Service {
  id: number;
  title: string;
  image: string;
}

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="service-card">
      <img src={service.image} alt={service.title} />
      <div className="service-overlay">
        <h3>{service.title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;