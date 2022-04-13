import { Alert } from "react-bootstrap";

export default function AlertBox(props) {
    return (
        <Alert animation="border" role="status">
            {props.children}
        </Alert>
    )
}