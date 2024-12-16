import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";

import { Button } from "react-bootstrap";

const SidebarComponent = () => {
  return (
    <>
      <div className="d-flex flex-column rounded bg-white border pt-3 pb-0 ps-3 pe-3 mb-3 shadow-sm mt-5 mx-5">
        <div className=" d-flex mb-2 justify-content-between ">
          <div>
            <h3 className="h5 fw-bold">Profile Language</h3>
            <p className="text-muted mb-0">Italian</p>
          </div>
          <div>
            {" "}
            <Button className="bg-transparent border-0 text-dark">
              {" "}
              <i className="bi bi-pencil-fill fs-3 text-decoration-none"></i>
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
              <i className="bi bi-pencil-fill fs-3 text-decoration-none"></i>
            </Button>
          </div>
        </div>
      </div>

      {/*-----------------------------------------------------------*/}

      <div className="d-flex flex-column rounded-top bg-white border p-3 mb-0 mx-5">
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
                <i className="bi bi-person-fill-add me-2 ms-1"></i>
                <span>Connect</span>
              </Button>
            </div>
          </div>
        </div>
        <hr className="my-0" />
        <div className=" mt-3 mb-2  ">
          <div className="d-flex">
            <div className="rounded-circle bg-black" style={{ height: "48px", width: "48px" }}></div>
            <div>
              <p className="ms-2 mb-0 fw-semibold">
                <a href="#" className="text-decoration-none text-black Profile ">
                  Andrea Ceccarelli
                </a>
                <span className="text-muted"> · 3°+</span>
              </p>
              <p className="ms-2 ">Sales Engineer at Global Services</p>
              <Button className="ConnectButton bg-white text-secondary  rounded-pill px-3 py-1">
                <i className="bi bi-person-fill-add me-2 ms-1"></i>
                <span>Connect</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="ShowButton d-flex justify-content-center mt-0 rounded-bottom border mx-5 mb-4 shadow-sm">
        <Button className=" bg-transparent border-0 rounded-top-0 w-100 fw-semibold text-dark">Show all</Button>
      </div>

      {/*-----------------------------------------------------------*/}

      <div className="d-flex flex-column rounded-top bg-white border p-3 mb-0 mx-5">
        <div className="  mb-4  ">
          <div>
            <h4 className="mt-3  mb-0 fs-5">People You May Know</h4>
            <p className="text-muted">From your industry</p>
          </div>
          <div className="d-flex">
            <div className="rounded-circle bg-black" style={{ height: "48px", width: "48px" }}></div>
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
                <span>Connect</span>
              </Button>
            </div>
          </div>
        </div>
        <hr className="my-0" />
        <div className=" mt-3 mb-2 ">
          <div className="d-flex">
            <div className="rounded-circle bg-black" style={{ height: "48px", width: "48px" }}></div>
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
                <span>Connect</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-0 rounded-bottom border mx-5 mb-4 shadow-sm">
        <Button className="ShowButton border-0 rounded-top-0 w-100 fw-semibold text-dark">Show all</Button>
      </div>
    </>
  );
};

export default SidebarComponent;
