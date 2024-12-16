import { Button, Card, Col, Row } from "react-bootstrap";

const SuggestedForYou = () => {
  return (
    <Card className="p-3 shadow-sm mt-2">
      <h3 className="mb-1 ps-3">Suggested for you</h3>
      <div className="greyParagraph d-flex align-items-center ps-3">
        {/*         <img
          src="src/assets/svg/occhio.svg"
          alt="occhio"
          className="py-1 pe-1"
        /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          data-supported-dps="16x16"
          fill="currentColor"
          className="mercado-match py-1 pe-1"
          width="24"
          height="24"
          focusable="false"
        >
          <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
        </svg>
        <p className="m-0 ">Private to you</p>
      </div>
      <Card.Body>
        <Row className="d-flex align-items-stretch">
          <Col className="d-flex">
            <Card style={{ height: "100%" }}>
              <div className="d-flex" style={{ height: "100%" }}>
                <div className="mt-3 ms-3">
                  <img
                    src="https://static.licdn.com/aero-v1/sc/h/5zkc19yvm6lth5phz87wg4ovn"
                    alt="shimmer"
                  />
                </div>
                <div>
                  <Card.Body>
                    <Card.Title>
                      Enhance your profile with the help of AI
                    </Card.Title>
                    <p>
                      Find people who can provide guidance and help you find
                      potential opportunities.
                    </p>
                    <Button className="mb-3">Try Premium for 0$</Button>
                    <p className="greyParagraph">
                      1-month free trial. We’ll send you a reminder 7 days
                      before your trial ends.
                    </p>
                  </Card.Body>
                </div>
                <div className="me-3 mt-3">
                  <i className="bi bi-x"></i>
                </div>
              </div>
            </Card>
          </Col>
          <Col className="d-flex">
            <Card style={{ height: "100%" }}>
              <div className="d-flex" style={{ height: "100%" }}>
                <div className="mt-3 ms-3">
                  <img
                    src="https://static.licdn.com/aero-v1/sc/h/3i04pcuhi9iqn7twfnwii8ou6"
                    alt="Magnet"
                  />
                </div>
                <div>
                  <Card.Body>
                    <Card.Title>
                      Connect with a Full Stack Engineer to achieve your career
                      goals
                    </Card.Title>
                    <p>
                      Find people who can provide guidance and help you find
                      potential opportunities.
                    </p>
                    <Button className="ConnectButton bg-white text-secondary rounded-pill px-3 py-1">
                      <span className="text-black">Search for people</span>
                    </Button>
                  </Card.Body>
                </div>
                <div className="me-3 mt-3">
                  <i className="bi bi-x"></i>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SuggestedForYou;
