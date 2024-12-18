export const postExperience = (allExperience, userId) => async (dispatch) => {
  dispatch({ type: "FETCH_ALL_EXPERIENCES_REQUEST" });

  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZWRhNzBlYTI4NjAwMTUyOGI5MzkiLCJpYXQiOjE3MzQzNDAwMDcsImV4cCI6MTczNTU0OTYwN30.czwRiUpBWc8RNbp0IJB5HRQtnvbfJuSHgPTqSuP3VFM"
      },
      body: JSON.stringify(allExperience)
    });

    const data = await response.json();
    dispatch({ type: "FETCH_ALL_EXPERIENCES_SUCCESS", payload: data });
  } catch (error) {
    console.error("Error fetching profiles:", error.message);
    dispatch({ type: "FETCH_ALL_PROFILES_FAILURE", payload: error.message });
  }
};
