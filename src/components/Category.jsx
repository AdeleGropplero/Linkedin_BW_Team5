import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobsByCategory } from "../redux/actions/jobsActions";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Category = () => {
  const { category } = useParams();
  console.log("Category param:", category);
  const { jobs, isLoading, error } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (category) {
      console.log("Dispatching fetchJobsByCategory with:", category);
      dispatch(fetchJobsByCategory(category));
    }
  }, [dispatch, category]);

  return (
    <Container className=" mt-3">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h1>Jobs in {category}</h1>

          {isLoading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div>
            {jobs.length > 0
              ? jobs.map((job) => (
                  <Card key={job._id} className="mb-3 bg-white">
                    <Card.Body>
                      <div className="d-flex justify-conten-between">
                        <Col lg={10}>
                          <Card.Title className="text-primary">
                            {job.title}
                          </Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">
                            {job.salary}
                          </Card.Subtitle>
                          <Card.Text>
                            <div>
                              <strong>Category:</strong>{" "}
                              <span className="ms-2">{job.category}</span>{" "}
                            </div>
                            <strong>Location:</strong>
                            <span className="ms-2">
                              {job.candidate_required_location}
                            </span>
                          </Card.Text>
                          <Card.Text>
                            <Link
                              className="text-decoration-none"
                              to={`../jobs/company/${job.company_name}`}
                            >
                              <strong className="text-dark">Company:</strong>
                              <span className=" fw-semibold ms-2">
                                {job.company_name}
                              </span>
                            </Link>
                          </Card.Text>
                        </Col>
                        <Col lg={3} className="align-content-end">
                          <Button
                            className="bg-secondary border-0 rounded-pill px-3"
                            as={Link}
                            to={job.url}
                          >
                            More info
                          </Button>
                        </Col>
                      </div>
                    </Card.Body>
                  </Card>
                ))
              : !isLoading && <p>Job not found</p>}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
