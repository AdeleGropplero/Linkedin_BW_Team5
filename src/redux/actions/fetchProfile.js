const token = import.meta.env.VITE_AUTH_TOKEN;

export const fetchProfile = (userId) => async (dispatch) => {
  dispatch({ type: "FETCH_PROFILE_REQUEST" });

  try {
    const url = userId ? `https://striveschool-api.herokuapp.com/api/profile/${userId}` : "https://striveschool-api.herokuapp.com/api/profile/me";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched Data:", data);
    dispatch({ type: "FETCH_PROFILE_SUCCESS", payload: data });
  } catch (error) {
    console.error("Error fetching profile:", error.message);
    dispatch({ type: "FETCH_PROFILE_FAILURE", payload: error.message });
  }
};
