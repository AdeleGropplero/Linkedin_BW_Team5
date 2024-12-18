const token = import.meta.env.VITE_AUTH_TOKEN;
export const fetchExperience = () => async (dispatch) => {
  dispatch({ type: "FETCH_ALL_EXPERIENCE_REQUEST" });

  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/675feda70ea286001528b939/experience",
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
    dispatch({ type: "FETCH_ALL_EXPERIENCES_SUCCESS", payload: data });
  } catch (error) {
    console.error("Error fetching experience:", error.message);
    dispatch({ type: "FETCH_ALL_EXPERIENCES_FAILURE", payload: error.message });
  }
};
