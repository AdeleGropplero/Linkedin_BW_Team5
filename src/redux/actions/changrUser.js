import { fetchExperiences } from "./experienceActions";
export const changeUser = (userId) => async (dispatch) => {
  dispatch({ type: "CHANGE_USER", payload: userId });

  dispatch(fetchProfile(userId));
  dispatch(fetchExperiences(userId));
};

export const fetchProfile = (userId) => async (dispatch) => {
  dispatch({ type: "FETCH_PROFILE_REQUEST" });
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZWE2OTBlYTI4NjAwMTUyOGI5MmYiLCJpYXQiOjE3MzQzNTY0NTUsImV4cCI6MTczNTU2NjA1NX0.X61mMDeti0CulgtJD66RJBppasMKOd6Dc4bExnJ7YGI"
      }
    });
    const data = await response.json();
    dispatch({ type: "FETCH_PROFILE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_PROFILE_FAILURE", payload: error.message });
  }
};
