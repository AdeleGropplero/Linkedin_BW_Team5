import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";

import FormComponent from "./FormComponent";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperiences } from "../redux/actions/experienceActions";

const Experience = () => {
  const experiences = useSelector((state) => state.experiences.experiences);
  console.log("Experiences: ", experiences);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const dispatch = useDispatch();

  const userId = useSelector((state) => state.profile.data?._id);
  console.log("userId: ", userId);

  useEffect(() => {
    if (userId) {
      dispatch(fetchExperiences(userId));
    }
  }, [dispatch, userId]);

  const expId = useSelector((state) => state.experiences.experiences._id);

  const handleModify = () => {
    if (userId && expId) {
      dispatch(fetchExperiences(userId, expId));
      console.log("Exp ID: ", expId);
    }
  };

  return (
    <>
      <div className="d-flex flex-column rounded bg-white border pt-3 pb-0 ps-3 pe-3 mb-3 shadow-sm mt-5 ">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h3 className="mt-2 ms-2 fs-4">Experience</h3>
          </div>
          <div className="d-flex">
            <div className="ExperienceIcon p-1 rounded-circle me-2">
              <i className="bi bi-plus-lg fs-2 p-2" onClick={openModal}></i>
            </div>
          </div>
        </div>
        {experiences.experiences?.map((experience) => (
          <div key={experience._id} className="d-flex">
            <div className=" ms-2 mt-2" style={{ height: "48px", width: "48px" }}>
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
              <h4 className="fs-5 ms-2 mt-2 mb-0 fw-semibold">{experience.role}</h4>
              <p className="fs-6 ms-2 mt-0 mb-0 ">{experience.company}</p>

              <p className="fs-6 ms-2 mt-0 text-muted">
                {new Date(experience.startDate).toISOString().slice(0, 10)} ·{" "}
                {experience.endDate ? new Date(experience.endDate).toISOString().slice(0, 10) : "In corso"} - {experience.area}
              </p>
              <div className="d-flex ms-2 gap-2 fw-semibold">
                <div>
                  <i className="bi bi-gem"></i>
                </div>
                <div>
                  <a href="#" className="Experience text-decoration-none text-black">
                    <p>{experience.description}</p>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="ExperienceIcon d-flex align-items-center justify-content-center p-1 rounded-circle ms-auto me-2"
              style={{ height: "48px", width: "50px" }}
            >
              <div className="px-3 text-dark">
                <svg
                  onClick={handleModify}
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
              </div>
            </div>
          </div>
        ))}
      </div>
      <FormComponent isOpen={isModalOpen} isClose={closeModal} />
    </>
  );
};
export default Experience;
