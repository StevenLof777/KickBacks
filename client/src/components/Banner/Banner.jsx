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
                      <h1 className="banner-right-text">  
                        <div >STEP UP YOUR NEW SUMMER STYLE</div>
                        <Link className="shop-now" to='/'>SHOP NOW</Link>
                      </h1>
                    </Col>
                </Row>
          </div>
      </>
    );
}

export default Banner;