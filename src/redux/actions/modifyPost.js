const token = import.meta.env.VITE_AUTH_TOKEN;

export const updateExperience = (postId, updateText) => async (dispatch) => {
  dispatch({ type: "UPDATE_EXPERIENCE_REQUEST" });

  try {
    const newPost = {
      text: updateText
    };
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(newPost)
    });

    if (!response.ok) {
      throw new Error("Failed to update experience");
    }

    const data = await response.json();
    dispatch({ type: "UPDATE_EXPERIENCE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "UPDATE_EXPERIENCE_FAILURE", payload: error.message });
  }
};
