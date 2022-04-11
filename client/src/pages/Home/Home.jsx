import { Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Banner from '../../../public/images/'
import data from '../../data'

const Home = () => {
    return(
        <>
            <Container>
                <h1>Products</h1>
            {data.products.map((product) => (
              <div key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Link to={`/product/${product.slug}`}>
                    <img src={product.image} alt={product.name}/>
                </Link>
                <Link to ={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                </Link>
                <p>
                    <strong>
                        ${product.price}
                    </strong>
                </p>
              </div>
            ))}
            </Container>
        </>
    )

}

export default Home