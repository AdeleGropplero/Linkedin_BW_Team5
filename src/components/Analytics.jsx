import { Button, Card, Col, Row } from "react-bootstrap";

const Analytics = () => {
  return (
    <>
      <div className="analytics">
        <div className="p-3 rounded-top border mt-2">
          <h3 className="mb-1 ps-3">Analytics</h3>
          <div className="greyParagraph d-flex align-items-center ps-3 mb-2">
            {/*   <img
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
            <p className="m-0">Private to you</p>
          </div>
          <Card.Body>
            <Row className="d-flex align-items-stretch ps-3">
              <Col>
                <div>
                  <div className="d-flex align-items-center mb-2">
                    <img src="src/assets/svg/omini.svg" alt="omini" />
                    <h5 className="m-0 ps-2 ">0 profile views</h5>
                  </div>
                  <p>Update your profile to attract viewers.</p>
                </div>
              </Col>
              <Col>
                <div>
                  <div className="d-flex align-items-center mb-2">
                    <img src="src/assets/svg/grafic.svg" alt="Grafico" />
                    <h5 className="m-0 ps-2 ">0 post impressions</h5>
                  </div>
                  <p className="m-0">Start a post to increase engagement.</p>
                  <p className="m-0 greyParagraph ">Past 7 days</p>
                </div>
              </Col>
              <Col></Col>
            </Row>
          </Card.Body>
        </div>
        <div className="ShowButton d-flex justify-content-center mt-0 rounded-bottom border  mb-4 shadow-sm">
          <Button className=" bg-transparent border-0 rounded-top-0 w-100 fw-semibold text-dark">
            Show all
          </Button>
        </div>
      </div>
    </>
  );
};

export default Analytics;
