import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";

const Experience = () => {
  return (
    <>
      <div className="d-flex flex-column rounded bg-white border pt-3 pb-0 ps-3 pe-3 mb-3 shadow-sm mt-5 ">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h3 className="mt-2 ms-2 fs-4">Experience</h3>
          </div>
          <div className="d-flex">
            <div className="ExperienceIcon p-1 rounded-circle me-2">
              <i className="bi bi-plus-lg fs-2 p-2"></i>
            </div>
            <div className="ExperienceIcon p-1 rounded-circle">
              <a href="#" className="px-3 text-dark">
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
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div
            className=" bg-primary ms-2 mt-2"
            style={{ height: "48px", width: "48px" }}
          >
            <a href="#">
              <img
                width="48"
                src="https://media.licdn.com/dms/image/v2/D4D0BAQHuvou30YRddw/company-logo_100_100/company-logo_100_100/0/1720712553131/ntt_data_europe_latam_logo?e=1742428800&amp;v=beta&amp;t=JrE9R7EtrEZxMjyudIFvLHKbgVenJp9csWWeyyaaIWk"
                loading="lazy"
                height="48"
                alt="Logo di NTT DATA Europe &amp; Latam"
                id="ember541"
                className="ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view"
              ></img>
            </a>
          </div>
          <div className="d-flex flex-column">
            <h4 className="fs-5 ms-2 mt-2 mb-0 fw-semibold">
              Consulente Salesforce
            </h4>
            <p className="fs-6 ms-2 mt-0 mb-0 ">
              NTT DATA Italia · A tempo pieno
            </p>
            <p className="fs-6 ms-2 mt-0 text-muted">
              ott 2022 - feb 2024 · 1 anno 5 mesi - Roma · Da remoto
            </p>
            <div className="d-flex ms-2 gap-2 fw-semibold">
              <div>
                <i className="bi bi-gem"></i>
              </div>
              <div>
                <a
                  href="#"
                  className="Experience text-decoration-none text-black"
                >
                  <p>SQL, Database e +4 competenze</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-between"></div>
        <div className="d-flex">
          <div
            className=" bg-primary ms-2 mt-2"
            style={{ height: "48px", width: "48px" }}
          >
            <a href="#">
              <img
                width="48"
                src="https://media.licdn.com/dms/image/v2/C4D0BAQG7dO4tG79mdA/company-logo_100_100/company-logo_100_100/0/1668154554619/iconsulting_logo?e=1742428800&amp;v=beta&amp;t=s0hR2HGdC83no2zQfEYY5HFkw3pOITRhtBonvb_GJZ8"
                loading="lazy"
                height="48"
                alt="Logo di ICONSULTING"
                id="ember266"
                className="ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view"
              ></img>
            </a>
          </div>
          <div className="d-flex flex-column">
            <h4 className="fs-5 ms-2 mt-2 mb-0 fw-semibold">
              Software Engineer
            </h4>
            <p className="fs-6 ms-2 mt-0 mb-0 ">ICONSULTING · A tempo pieno</p>
            <p className="fs-6 ms-2 mt-0 text-muted">
              gen 2022 - ott 2022 · 9 mesi - Roma · Da remoto
            </p>
            <div className="d-flex ms-2 gap-2 fw-semibold">
              <div>
                <i className="bi bi-gem"></i>
              </div>
              <div>
                <a
                  href="#"
                  className="Experience text-decoration-none text-black"
                >
                  <p>Sviluppo di software, Database e +7 competenze</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Experience;
