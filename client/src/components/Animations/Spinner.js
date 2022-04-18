import { Spinner } from "react-bootstrap";
import './styles.css'

export default function LoadingBox() {
    return (
        <Spinner animation="border" role="status" className="spinner">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}