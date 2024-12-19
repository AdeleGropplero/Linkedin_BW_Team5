/* import { useState } from "react"; */
import { useSelector } from "react-redux";
/* import { fetchJobs } from "../redux/actions/jobsActions"; */
import { Col, Container, Row } from "react-bootstrap";

const Jobs = () => {
  /*  const [searchQuery, setSearchQuery] = useState(""); */
  /*   const dispatch = useDispatch(); */
  const { jobs, isLoading, error } = useSelector((state) => state.jobs);

  /*  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchJobs(searchQuery));
  }; */

  return (
    <Container className="bg-white mt-3">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h1>Jobs</h1>

          {isLoading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div>
            <div>
              {jobs.length > 0
                ? jobs.map((job) => (
                    <div key={job._id} style={{ margin: "10px 0" }} className="bg-light p-2">
                      <h3>{job.title}</h3>
                      <p>{job.company_name}</p>
                      <p>{job.description}</p>
                      <a href={job.url} target="_blank" rel="noopener noreferrer">
                        More info
                      </a>
                    </div>
                  ))
                : !isLoading && <p>job not found</p>}
            </div>
            <div>
              {jobs.length > 0
                ? jobs.map((job) => (
                    <div key={job._id} style={{ margin: "10px 0" }} className="bg-light p-2">
                      <h5>{job.salary}</h5>
                      <p>{job.category}</p>
                      <p>{job.candidate_required_location}</p>
                      <a href={job.url} target="_blank" rel="noopener noreferrer">
                        More info
                      </a>
                    </div>
                  ))
                : !isLoading && <p>job not found</p>}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Jobs;
