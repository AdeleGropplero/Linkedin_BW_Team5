const token = import.meta.env.VITE_AUTH_TOKEN;

export const newPost = (postText) => async (dispatch) => {
  dispatch({ type: "NEW_POST_REQUEST" });

  try {
    const newPost = {
      text: postText
    };
    const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(newPost)
    });

    const data = await response.json();
    dispatch({ type: "NEW_POST_SUCCESS", payload: data });
  } catch (error) {
    console.error("Error fetching profiles:", error.message);
    dispatch({ type: "NEW_POST_FAILURE", payload: error.message });
  }
};
