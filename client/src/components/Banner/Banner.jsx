import { Link } from "react-router-dom";
import {Row, Col, Container} from 'react-bootstrap'
import crocs from './crocs-banner.jpg';
import model from './nikes.jpg';
import banner from './banner.png';
import './styles.css';

const Banner = () => {


    return(
      <>
   <Container>   
        <Row className="banner">

              <Col className="banner-left">
                  <img src={model} alt="Model Converse" className="banner-img text-ovelay"/>
              </Col>
              <Col className="banner-right">
                <h1 className="banner-right-text">  
                STEP YOUR NEW SUMMER STYLE
                </h1>

                  <Link className="shop-now" to='/'>SHOP NOW</Link>

              </Col>
          </Row>

        
      </Container>

      </>
    );
}
export default Banner