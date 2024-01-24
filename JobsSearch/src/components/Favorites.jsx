import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { REMOVE_FAVORITE } from "../actions/favoriteActions";


const Favorites = () => {

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.list);

    const navigate = useNavigate();

    return (
        <Container>
            <Row>
                <Col className="col-12">
                    <h1 className="my-3 display-5 fw-bold">Favorites</h1>
                    <Button variant="outline-primary btn-sm" onClick={() => navigate("/")} >Go back</Button>
                </Col>
                <div className="mt-5 w-25">
                    <ListGroup>
                        {favorites.length > 0 ? (
                            favorites.map((el, index) => (
                                <ListGroup.Item key={index} className="d-flex my-3 position-relative p-4">
                                    <div>{el}</div>
                                    <Button className="position-absolute end-0 me-1" variant="outline-danger btn btn-sm" onClick={() => dispatch({ type: REMOVE_FAVORITE, payload: el })}><svg width="20px" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                    </svg></Button>
                                </ListGroup.Item>
                            ))
                        ) : (
                            <ListGroup.Item>No favorites yet!</ListGroup.Item>
                        )}
                    </ListGroup>
                </div>
            </Row>
        </Container>
    )

}

export default Favorites;