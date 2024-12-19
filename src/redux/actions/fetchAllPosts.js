const token = import.meta.env.VITE_AUTH_TOKEN;
export const fetchAllPosts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_ALL_POSTS_REQUEST" });
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched Data:", data);
      dispatch({ type: "FETCH_ALL_POSTS_SUCCESS", payload: data });
      return {
        payload: data
      };
    } catch (error) {
      console.error("Error fetching profile:", error.message);
      dispatch({ type: "FETCH_ALL_POSTS_FAILURE", payload: error.message });
    }
  };
};
