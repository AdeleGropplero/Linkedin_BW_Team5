/* import { useState } from "react"; */
import { useSelector } from "react-redux";
/* import { fetchJobs } from "../redux/actions/jobsActions"; */
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BsBookmarkFill,
  BsFileEarmarkTextFill,
  BsListUl,
  BsPencilSquare
} from "react-icons/bs";
import prime from "../assets/prime.svg";
import { BiX } from "react-icons/bi";

const Jobs = () => {
  /*  const [searchQuery, setSearchQuery] = useState(""); */
  /*   const dispatch = useDispatch(); */
  const { jobs, isLoading, error } = useSelector((state) => state.jobs);
  const profileData = useSelector((state) => state.profile.data);

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
        <Col lg={3}>
          <div className="border border-2 rounded-3 ps-3">
            <div className="d-flex align-items-center fw-medium py-3">
              <BsListUl className="me-2" />
              Preferences
            </div>
            <div className="d-flex align-items-center fw-medium py-3">
              <BsBookmarkFill className="me-2" />
              My Jobs
            </div>
            <div
              className="d-flex align-items-center fw-medium py-3"
              style={{ marginLeft: "-2px" }}
            >
              <img
                src={prime}
                alt=""
                style={{ width: "20px", height: "20px" }}
                className="my-1 mb-1 me-2"
              />
              My Career Insights
            </div>
            <div className="d-flex align-items-center fw-medium py-3">
              <BsFileEarmarkTextFill className="me-2" />
              Interview prep
            </div>
          </div>
          <Button
            className="bg-transparent text-primary rounded-pill w-100 mt-3 py-2 d-flex align-items-center justify-content-center"
            style={{ fontSize: "13px" }}
          >
            <BsPencilSquare className="me-2" />
            Start hiring with AI
          </Button>
        </Col>
        <Col lg={6} xs={12} md={8}>
          <div className="d-flex justify-content-between bg-white border border-2 rounded-3 mb-3">
            <div className="ms-2">
              <h5 className="mb-0 mt-3">
                Get notified about jobs you are <br /> interested in
              </h5>
              <p className="text-secondary pb-2" style={{ fontSize: "14px" }}>
                Create an alert for a job title, a company, or key
                <br /> words.
              </p>
              <Button className="rounded-pill fw-medium px-3 py-1 mb-2">
                Create alert
              </Button>
            </div>
            <BiX className="mt-3 me-2 fs-4" />
          </div>

          <div className="d-flex justify-content-between bg-white border border-2 rounded-3 mb-3">
            <div className="ms-2">
              <h5 className="mb-0 mt-3">
                Show recruiters you are open to work
              </h5>
              <p className="text-secondary pb-1" style={{ fontSize: "14px" }}>
                Add your preferences to let recruiters knw that you are open to
                relevant job opportunities.
              </p>
              <div className="w-100">
                <Button
                  href="/profile"
                  className="bg-transparent py-0 px-0 border-0 border"
                >
                  <div className="d-flex align-items-center">
                    <img
                      id="post_image-home-center"
                      className=" w-75 align-bottom z-10 shadow object-fit-contain rounded-circle"
                      src={
                        profileData?.image || "https://via.placeholder.com/35"
                      }
                      alt="profile image"
                    />
                    <div className="text-start ps-3">
                      <p
                        className="text-black p-0 m-0 fw-medium"
                        style={{ fontSize: "11px" }}
                      >
                        Open to work
                      </p>
                      <p
                        className="text-dark m-0"
                        style={{ fontSize: "11px", width: "200px" }}
                      >
                        You control who can view this
                      </p>
                    </div>
                  </div>
                </Button>
              </div>
              <Button className="rounded-pill fw-medium px-3 py-1 my-3">
                Get started
              </Button>
            </div>
            <BiX className="mt-3 me-2 fs-4" />
          </div>

          <div className="d-flex justify-content-between bg-white border border-2 rounded-3 mb-3">
            <div className="ms-2">
              <h5 className="mb-0 mt-3">Recent jobs search</h5>
              <p className="text-secondary pb-2" style={{ fontSize: "14px" }}>
                Filmmaker
              </p>
              <Button className="rounded-pill fw-medium px-3 py-1 mb-2">
                Create alert
              </Button>
            </div>
            <BiX className="mt-3 me-2 fs-4" />
          </div>
          <h1>Jobs</h1>

          {isLoading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div>
            {jobs.length > 0
              ? jobs.map((job) => (
                  <Card key={job._id} className="mb-3 bg-light">
                    <Card.Body>
                      <Card.Title>{job.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {job.salary}
                      </Card.Subtitle>
                      <Card.Text>
                        <Link to={`/jobs/${job.category}`}>
                          <strong>Category:</strong>
                          {job.category}
                        </Link>
                        <br />
                        <strong>Location:</strong>{" "}
                        {job.candidate_required_location}
                      </Card.Text>
                      <Card.Text>
                        <Link to={`/jobs/${job.company_name}`}>
                          {job.company_name}
                        </Link>
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
        <Col lg={3}></Col>
      </Row>
    </Container>
  );
};

export default Jobs;
