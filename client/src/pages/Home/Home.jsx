import { useEffect, useReducer, 
  // eslint-disable-next-line
  useState
 } from 'react';
import axios from 'axios';
// import logger from 'use-reducer-logger';
// eslint-disable-next-line
import LinkContainer from 'react-router-bootstrap/LinkContainer';
// eslint-disable-next-line
import { toast, 
  // eslint-disable-next-line
  ToastContainer 
} from 'react-toastify';
// eslint-disable-next-line
import { Col, Row, Container, Form, Nav } from 'react-bootstrap';
import Product from '../../components/Products/Product/Product.js';
// eslint-disable-next-line
import AlertBox from '../../components/Animations/AlertBox.js';
// eslint-disable-next-line
import Spinner from '../../components/Animations/Spinner.js';
import Banner from '../../components/Banner/Banner';
// import Carousel from '../../components/Carousels/Home-Pg-Carousel.jsx';
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAIL } from '../../constants/actionTypes.js';
// import Main from '../../components/Main/Main.jsx';
// eslint-disable-next-line
import { getError } from '../../utils.js';
import './styles.css'

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, products: action.payload, loading: false };
    case FETCH_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Home() {
  const [{ 
    loading, 
    error, 
    products
   }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });
  
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: FETCH_REQUEST });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: FETCH_SUCCESS, payload: result.data });
        
      } catch (err) {
        dispatch({ type: FETCH_FAIL, payload: err.message });
      }
    };
    fetchData();
  }, []);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <Banner/>
      <div className="products">
        {loading ? (
          <Spinner/>
        ) : error ? (

          <Container>
            <AlertBox variant='danger'>{error}</AlertBox>
          </Container> 
        ) : (
          <Container className='product-container'>

            <h1>Featured Products</h1>
            {/* <Carousel/> */}

              <Col>
                <Row>
                  {products.map((product) => (
                    <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                      <Product product={product}></Product>
                    </Col>
                  ))}
                </Row> 
              </Col>


          {/* <Main/> */}
          </Container>

        )}
      </div>
    </div>
  );
}
export default Home;