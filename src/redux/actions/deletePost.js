const token = import.meta.env.VITE_AUTH_TOKEN;

export const deleteExperience = (postId) => async (dispatch) => {
  dispatch({ type: "DELETE_POST_REQUEST" });
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
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
    dispatch({ type: "DELETE_POST _SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "DELETE_POST _FAILURE", payload: error.message });
  }
};
