import { Container } from "react-bootstrap";
import Banner from '../../../public/images/'

const Home = () => {
    return(
        <>
            <Container>
                <h1>
                    Home
                </h1>
                <img src={Banner}/>
            </Container>
        </>
    )

}

export default Home