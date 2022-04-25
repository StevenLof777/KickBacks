import { useEffect, useReducer, 
  // useState
 } from 'react';
import axios from 'axios';
// import logger from 'use-reducer-logger';
// import { toast, ToastContainer } from 'react-toastify';
import { Col, Row, Container, Form } from 'react-bootstrap';
import Product from '../../components/Products/Product/Product.js';
import AlertBox from '../../components/Animations/AlertBox.js';
import Spinner from '../../components/Animations/Spinner.js';
import Banner from '../../components/Banner/Banner';
// import Carousel from '../../components/Carousels/Home-Pg-Carousel.jsx';
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAIL } from '../../constants/actionTypes.js';
// import Main from '../../components/Main/Main.jsx';
// import { getError } from '../../utils.js';
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

  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const { data } = await axios.get(`/api/products/categories`);
  //       setCategories(data);
  //     } catch (err) {
  //       toast.error(getError(err));
  //     }
  //   };
  //   fetchCategories();
  // }, []);

  return (
    <div>
      <Banner/>
      <div className="products">
        {loading ? (
          <Spinner/>
        ) : error ? (
          <AlertBox variant='danger'>{error}</AlertBox>
        ) : (
          <Container className='product-container'>

            {/* <h1>Featured Products</h1> */}
            {/* <Carousel/> */}
            <Row className='product-row'>
              <Col sm={3}>
              <Form>
                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <h2 className='font-weight-300'>CATEGORIES</h2 >
                    <Form.Check 
                      type={type}
                      id={`default-${type}`}
                      // label={`default ${type}`}
                      label='Womens'
                    />
                    <Form.Check 
                      type={type}
                      id={`default-${type}`}
                      // label={`default ${type}`}
                      label='Mens'
                    />
                    <Form.Check 
                      type={type}
                      id={`default-${type}`}
                      // label={`default ${type}`}
                      label='Kids'
                    />
                     {/* {categories.map((category) => (
                      <Form.Check key={category}>
                        <LinkContainer
                          to={`/search?category=${category}`}
                          onClick={() => setSidebarIsOpen(false)}
                        >
                          <Nav.Link>{category}</Nav.Link>
                        </LinkContainer>
                      </Form.Check>
                      ))} */}

                    {/* <Form.Check
                      disabled
                      type={type}
                      label={`disabled ${type}`}
                      id={`disabled-default-${type}`}
                    /> */}
                  </div>
                ))}
              </Form>
              </Col>
              <Col>
                <Row>
                  {products.map((product) => (
                    <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                      <Product product={product}></Product>
                    </Col>
                  ))}
                </Row> 
              </Col>
            </Row>

          {/* <Main/> */}
          </Container>

        )}  
      </div>
    </div>
  );
}
export default Home;