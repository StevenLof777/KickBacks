import { Alert } from "react-bootstrap";

export default function AlertBox(props) {
    return (
        <Alert animation="border" role="status" className="">
            {props.children}
        </Alert>
    )
}