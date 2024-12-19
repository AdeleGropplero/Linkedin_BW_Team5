const token = import.meta.env.VITE_AUTH_TOKEN;

export const deleteExperience = (userId, expId) => async (dispatch) => {
  dispatch({ type: "DELETE_EXPERIENCE_REQUEST" });
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error("Failed to update experience");
    }

    const data = await JSON.parse(response);
    dispatch({ type: "DELETE_EXPERIENCE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "DELETE_EXPERIENCE_FAILURE", payload: error.message });
  }
};
