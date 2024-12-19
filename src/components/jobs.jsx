/* import { useState } from "react"; */
import { useSelector } from "react-redux";
/* import { fetchJobs } from "../redux/actions/jobsActions"; */
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Jobs = () => {
  /*  const [searchQuery, setSearchQuery] = useState(""); */
  /*   const dispatch = useDispatch(); */
  const { jobs, isLoading, error } = useSelector((state) => state.jobs);

  /*  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchJobs(searchQuery));
  }; */
  /* 
  const navigate = useNavigate();

  const handleNavigate = (x) => {
    navigate(`/jobs/${x}`);
  };
 */
  return (
    <Container className="bg-white mt-3">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h1>Jobs</h1>

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
                        <Link to={`/jobs/${job.category}`}>
                          <strong>Category:</strong>
                          {job.category}
                        </Link>
                        <br />
                        <strong>Location:</strong> {job.candidate_required_location}
                      </Card.Text>
                      <Card.Text>
                        <Link to={`/jobs/${job.company_name}`}>{job.company_name}</Link>
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

export default Jobs;
