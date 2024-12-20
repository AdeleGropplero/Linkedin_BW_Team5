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
    <Container className="bg-white mt-3">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h1>Jobs in {category}</h1>

          {isLoading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div>
            {jobs.length > 0
              ? jobs.map((job) => (
                  <Card key={job._id} className="mb-3 bg-light">
                    <Card.Body>
                      <Card.Title>{job.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{job.salary}</Card.Subtitle>
                      <Card.Text>
                        <strong>Category:</strong> {job.category} <br />
                        <strong>Location:</strong> {job.candidate_required_location}
                      </Card.Text>
                      <Card.Text>
                        <Link to={`./jobs/${job.company_name}`}>{job.company_name}</Link>
                      </Card.Text>
                      <Button variant="primary" as={Link} to={job.url}>
                        More info
                      </Button>
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
