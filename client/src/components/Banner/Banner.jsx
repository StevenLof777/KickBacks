import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap'
import nikes from './nikes.jpg';
import './styles.css';

const Banner = () => {
    return(
      <>
        <div className="banner-container ">   
              <Row className="banner">
                    <Col className="banner-left">
                        <img src={nikes} alt="Model Converse" className="banner-img text-ovelay"/>
                    </Col>
                    <Col className="banner-right">
                      <div className="banner-right-text">  
                        <h1 className="banner-h">STEP UP YOUR NEW SUMMER STYLE</h1>
                        <Link className="shop-now" to='/'>SHOP NOW</Link>
                      </div>
                    </Col>
                </Row>
          </div>
      </>
    );
}

export default Banner;