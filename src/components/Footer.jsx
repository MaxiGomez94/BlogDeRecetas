import 'bootstrap/dist/css/bootstrap.css'
import Logo from "../assets/chef.png"
import { Col } from 'react-bootstrap';
import '../Navegation.css';

const Footer = () => {
    return (
        <footer className='bg-black text-light text-center py-0'>
            
            <Col >
            <div className='img-footer d-flex justify-content-start'>
                <img src={Logo} alt="" className='img-fluid' width={130} />
            </div>
            <div><p>&copy;Todos los derechos reservados</p></div>
            </Col>
        </footer>
    );
};

export default Footer;