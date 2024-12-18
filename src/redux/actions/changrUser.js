const token = import.meta.env.VITE_AUTH_TOKEN;
import { fetchExperiences } from "./experienceActions";
export const changeUser = (userId) => async (dispatch) => {
  dispatch({ type: "CHANGE_USER", payload: userId });

  dispatch(fetchProfile(userId));
  dispatch(fetchExperiences(userId));
};

export const fetchProfile = (userId) => async (dispatch) => {
  dispatch({ type: "FETCH_PROFILE_REQUEST" });
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    const data = await response.json();
    dispatch({ type: "FETCH_PROFILE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_PROFILE_FAILURE", payload: error.message });
  }
};
