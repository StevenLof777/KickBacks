// import { Link } from "react-router-dom";
import { Row, Col, Button } from 'react-bootstrap'
import crocs from './crocs.jpg';
import woman from './woman.jpg';
import './styles.css';

const Banner = () => {
    return(
      <>
        <Row className="banner-main-container">
            <Col className="">
                <img src={crocs} alt="Model Converse" className="banner-main-img"/>
                    <div className='main-text'>
                        <h3>CLASSICS</h3>
                        Keep it classic with a trend you can't go wrong in.
                    </div>
                <Button variant="primary" className='custom-button'>BROWSE CROCS</Button>
            </Col>
            <Col className="">
                    <img src={woman} alt="Model Converse" className="banner-main-img"/>
                    <div  className='main-text'>
                        <h3>VERY UPLIFTING</h3>
                        Elevate your look this season with platform sneakers.
                    </div>
                <Button variant="primary" className='custom-button'>BROWSE WOMENS</Button>
            </Col>
        </Row>
      </>
    );
}

export default Banner;