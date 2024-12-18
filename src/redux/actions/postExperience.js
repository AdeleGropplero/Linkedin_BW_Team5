export const postExperience = (allExperience, userId) => async (dispatch) => {
  dispatch({ type: "FETCH_ALL_EXPERIENCES_REQUEST" });

  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYyOThjZDUzMDRhNzAwMTUxNDhiYTYiLCJpYXQiOjE3MzQ1MTQ4OTMsImV4cCI6MTczNTcyNDQ5M30.W5pw7kwzkkIj0vjXYWwmT8lHsoMAejLE2Lp6BTWLbYo"
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
