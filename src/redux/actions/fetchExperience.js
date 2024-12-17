export const fetchExperience = () => async (dispatch) => {
  dispatch({ type: "FETCH_ALL_EXPERIENCE_REQUEST" });

  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/675feda70ea286001528b939/experience", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZWE2OTBlYTI4NjAwMTUyOGI5MmYiLCJpYXQiOjE3MzQzNTY0NTUsImV4cCI6MTczNTU2NjA1NX0.X61mMDeti0CulgtJD66RJBppasMKOd6Dc4bExnJ7YGI"
      }
    });

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
