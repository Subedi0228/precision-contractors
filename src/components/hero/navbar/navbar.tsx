import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar_brand'>
            <img src='public/images/logo.png' alt='Company Logo' className='brand_logo' />
            <span className='brand_title'>PRECISION</span>
        </div>
        <ul className='navbar_links'>
            <li className='navbar_link'>SERVICES</li>
            <li className='navbar_link'>OUR WORK</li>
            <li className='navbar_link'>CONTACT US</li>
        </ul>
    </div>
  );
};

export default Navbar;