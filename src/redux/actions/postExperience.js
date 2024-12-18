const token = import.meta.env.VITE_AUTH_TOKEN;
export const postExperience = (allExperience) => async (dispatch) => {
  dispatch({ type: "FETCH_ALL_EXPERIENCES_REQUEST" });

  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/675feda70ea286001528b939/experiences",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(allExperience)
      }
    );

    const data = await response.json();
    dispatch({ type: "FETCH_ALL_EXPERIENCES_SUCCESS", payload: data });
  } catch (error) {
    console.error("Error fetching profiles:", error.message);
    dispatch({ type: "FETCH_ALL_PROFILES_FAILURE", payload: error.message });
  }
};
