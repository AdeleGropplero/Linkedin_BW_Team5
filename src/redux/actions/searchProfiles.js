export const searchProfiles = (query) => async (dispatch) => {
  dispatch({ type: "SEARCH_PROFILES_REQUEST" });

  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile?name=${query}`, {
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
    dispatch({ type: "SEARCH_PROFILES_SUCCESS", payload: data });
  } catch (error) {
    console.error("Error searching profiles:", error.message);
    dispatch({ type: "SEARCH_PROFILES_FAILURE", payload: error.message });
  }
};
