import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProfiles } from "../redux/actions/fetchAllProfiles";

const ProfilesList = () => {
  const dispatch = useDispatch();

  const allProfiles = useSelector((state) => state.profile.allProfiles);
  const allProfilesLoading = useSelector((state) => state.profile.allProfilesLoading);
  const allProfilesError = useSelector((state) => state.profile.allProfilesError);

  useEffect(() => {
    dispatch(fetchAllProfiles());
  }, [dispatch]);

  if (allProfilesLoading) return <div>Loading profiles...</div>;
  if (allProfilesError) return <div>Error: {allProfilesError}</div>;

  return (
    <div>
      <h2>All Profiles</h2>
      <ul>
        {allProfiles.map((profile) => (
          <li key={profile._id}>
            <img
              src={profile.image || "https://via.placeholder.com/35"}
              alt={profile.name}
              style={{ width: "35px", height: "35px", borderRadius: "50%", marginRight: "10px" }}
            />
            {profile.name} {profile.surname} - {profile.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilesList;
