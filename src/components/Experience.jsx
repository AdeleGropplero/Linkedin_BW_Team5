import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";

const Experience = () => {
  return (
    <>
      <div className="d-flex flex-column rounded bg-white border pt-3 pb-0 ps-3 pe-3 mb-3 shadow-sm mt-5 mx-5">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h3 className="mt-2 ms-2 fs-4">Experience</h3>
          </div>
          <div className="d-flex">
            <div className="ExperienceIcon p-1 rounded-circle me-2">
              <i className="bi bi-plus-lg fs-2 p-2"></i>
            </div>
            <div className="ExperienceIcon p-1 rounded-circle ">
              <i className="bi bi-pencil-fill fs-4 p-2"></i>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className=" bg-primary ms-2 mt-2" style={{ height: "48px", width: "48px" }}>
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
            <h4 className="fs-5 ms-2 mt-2 mb-0 fw-semibold">Consulente Salesforce</h4>
            <p className="fs-6 ms-2 mt-0 mb-0 ">NTT DATA Italia · A tempo pieno</p>
            <p className="fs-6 ms-2 mt-0 text-muted">ott 2022 - feb 2024 · 1 anno 5 mesi - Roma · Da remoto</p>
            <div className="d-flex ms-2 gap-2 fw-semibold">
              <div>
                <i className="bi bi-gem"></i>
              </div>
              <div>
                <a href="#" className="Experience text-decoration-none text-black">
                  <p>SQL, Database e +4 competenze</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-between"></div>
        <div className="d-flex">
          <div className=" bg-primary ms-2 mt-2" style={{ height: "48px", width: "48px" }}>
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
            <h4 className="fs-5 ms-2 mt-2 mb-0 fw-semibold">Software Engineer</h4>
            <p className="fs-6 ms-2 mt-0 mb-0 ">ICONSULTING · A tempo pieno</p>
            <p className="fs-6 ms-2 mt-0 text-muted">gen 2022 - ott 2022 · 9 mesi - Roma · Da remoto</p>
            <div className="d-flex ms-2 gap-2 fw-semibold">
              <div>
                <i className="bi bi-gem"></i>
              </div>
              <div>
                <a href="#" className="Experience text-decoration-none text-black">
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
