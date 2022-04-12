import { useParams } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAIL } from '../../constants/actionTypes.js';
import Rating from './Product/Rating.js';
import { Container } from 'react-bootstrap';

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, product: action.payload, loading: false };
    case FETCH_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};


function ProductScreen() {
  const params = useParams();
  const {slug} = params

  const [{ loading, error, product }, dispatch] = useReducer((reducer), {
    product: [],
    loading: true,
    error: '',
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: FETCH_REQUEST });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: FETCH_SUCCESS, payload: result.data });
      } catch (err) {
        dispatch({ type: FETCH_FAIL, payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, [slug]);

  return (
    <Container>
    loading? <>loading...</>
    : error? <>{error}</>
    :
    <>
      <Row>
          <Col md={6}>
            <img 
              src={product.image}
              alt={product.name}
            />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h1>{product.name}</h1>
              </ListGroup.Item>
              <ListGroup.Item>
                <h1>Description: {product.description}</h1>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating 
                  rating={product.rating}
                  numReviews={product.numReviews}
                />
              </ListGroup.Item>

            </ListGroup>
          </Col>
          <Col md={3}></Col>
        </Row>    
    </>
    </Container>
  )
}
export default ProductScreen;