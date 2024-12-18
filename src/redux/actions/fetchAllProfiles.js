const token = import.meta.env.VITE_AUTH_TOKEN;
export const fetchAllProfiles = () => async (dispatch) => {
  dispatch({ type: "FETCH_ALL_PROFILES_REQUEST" });

  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    dispatch({ type: "FETCH_ALL_PROFILES_SUCCESS", payload: data });
  } catch (error) {
    console.error("Error fetching profiles:", error.message);
    dispatch({ type: "FETCH_ALL_PROFILES_FAILURE", payload: error.message });
  }
};
