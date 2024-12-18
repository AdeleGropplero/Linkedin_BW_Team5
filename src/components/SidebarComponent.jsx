import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";

import { Button } from "react-bootstrap";

const SidebarComponent = () => {
  return (
    <>
      <div className="d-flex flex-column rounded bg-white border pt-3 pb-0 ps-3 pe-3 mb-3 shadow-sm mt-3 ">
        <div className=" d-flex mb-2 justify-content-between ">
          <div>
            <h3 className="h5 fw-bold">Profile Language</h3>
            <p className="text-muted mb-0">Italian</p>
          </div>
          <div>
            {" "}
            <Button className="bg-transparent border-0 text-dark">
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="fs-4 mt-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
              </svg>
            </Button>
          </div>
        </div>
        <hr className="my-3" />
        <div className="d-flex justify-content-between mb-3">
          <div>
            <h3 className="h5 fw-bold">Public Profile and URL</h3>
            <p className="text-muted mb-0">www.linkedin.com/</p>
          </div>

          <div>
            <Button className="bg-transparent border-0 text-dark">
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="fs-4 mt-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/*-----------------------------------------------------------*/}

      <div className="d-flex flex-column rounded-top bg-white border p-3 mb-0 ">
        <div className="  mb-4  ">
          <div>
            <h4 className="mt-3  mb-3 fs-5">More profiles for you</h4>
          </div>
          <div className="d-flex">
            <div className="rounded-circle bg-black" style={{ height: "48px", width: "48px" }}></div>
            <div>
              <p className="ms-2 mb-0 fw-semibold">
                <a href="#" className="text-decoration-none text-black Profile">
                  Andrea Ceccarelli
                </a>
                <span className="text-muted"> · 3°+</span>
              </p>
              <p className="ms-2 ">Sales Engineer at Global Services</p>
              <Button className="ConnectButton bg-white text-secondary  rounded-pill px-3 py-1">
                <i className="bi bi-person-fill-add me-2 ms-0 ps-0"></i>
                <span className="fw-semibold">Connect</span>
              </Button>
            </div>
          </div>
        </div>
        <hr className="my-0" />
        <div className=" mt-3 mb-2  ">
          <div className="d-flex">
            <div className="rounded-circle bg-black flex-shrink-0" style={{ height: "48px", width: "48px" }}></div>
            <div>
              <p className="ms-2 mb-0 fw-semibold">
                <a href="#" className="text-decoration-none text-black Profile ">
                  Andrea Ceccarelli
                </a>
                <span className="text-muted"> · 3°+</span>
              </p>
              <p className="ms-2 ">Sales Engineer at Global Services</p>
              <Button className="ConnectButton bg-white text-secondary  rounded-pill px-3 py-1">
                <i className="bi bi-person-fill-add me-2"></i>
                <span className="fw-semibold">Connect</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="ShowButton d-flex justify-content-center mt-0 rounded-bottom border  mb-4 shadow-sm">
        <Button className=" bg-transparent border-0 rounded-top-0 w-100 fw-semibold text-dark">Show all</Button>
      </div>

      {/*-----------------------------------------------------------*/}

      <div className="d-flex flex-column rounded-top bg-white border p-3 mb-0 ">
        <div className="  mb-4  ">
          <div>
            <h4 className="mt-3  mb-0 fs-5">People You May Know</h4>
            <p className="text-muted">From your industry</p>
          </div>
          <div className="d-flex">
            <div className="rounded-circle bg-black flex-shrink-0" style={{ height: "48px", width: "48px" }}></div>
            <div>
              <p className="ms-2 mb-0 fw-semibold">
                <a href="#" className="text-decoration-none text-black mb-0 Profile">
                  Andrea Ceccarelli
                </a>
                <span className="text-muted"> · 3°+</span>
              </p>
              <p className="ms-2 ">Sales Engineer at Global Services</p>
              <Button className="ConnectButton bg-white text-secondary  rounded-pill px-3 py-1">
                <i className="bi bi-person-fill-add me-2 ms-1"></i>
                <span className="fw-semibold">Connect</span>
              </Button>
            </div>
          </div>
        </div>
        <hr className="my-0" />
        <div className=" mt-3 mb-2 ">
          <div className="d-flex">
            <div className="rounded-circle bg-black flex-shrink-0" style={{ height: "48px", width: "48px" }}></div>
            <div>
              <p className=" ms-2 mb-0 fw-semibold ">
                <a href="#" className="text-decoration-none text-black Profile">
                  Andrea Ceccarelli
                </a>
                <span className="text-muted"> · 3°+</span>
              </p>
              <p className="ms-2 ">Sales Engineer at Global Services</p>
              <Button className="ConnectButton bg-white text-secondary  rounded-pill px-3 py-1">
                <i className="bi bi-person-fill-add me-2 ms-1"></i>
                <span className="fw-semibold">Connect</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-0 rounded-bottom border  mb-4 shadow-sm">
        <Button className="ShowButton border-0 rounded-top-0 w-100 fw-semibold text-dark">Show all</Button>
      </div>
    </>
  );
};

export default SidebarComponent;
