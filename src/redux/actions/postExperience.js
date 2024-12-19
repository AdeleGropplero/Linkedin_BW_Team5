const token = import.meta.env.VITE_AUTH_TOKEN;
export const postExperience = (experienceData) => async (dispatch) => {
  dispatch({ type: "POST_EXPERIENCE_REQUEST" });

  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/675feda70ea286001528b939/experiences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(experienceData)
    });

    if (!response.ok) {
      throw new Error("Failed to create experience");
    }

    const data = await response.json();
    dispatch({ type: "POST_EXPERIENCE_SUCCESS", payload: data });
    return data;
  } catch (error) {
    console.error("Error posting experience:", error.message);
    dispatch({ type: "POST_EXPERIENCE_FAILURE", payload: error.message });
    throw error;
  }
};
