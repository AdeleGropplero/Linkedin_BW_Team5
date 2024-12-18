const token = import.meta.env.VITE_AUTH_TOKEN;
export const fetchExperiences =
  (userId, expId = "") =>
  async (dispatch) => {
    dispatch({ type: "FETCH_EXPERIENCE_REQUEST" });
    try {
      const url = expId
        ? `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`
        : `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      dispatch({
        type: "FETCH_EXPERIENCE_SUCCESS",
        payload: { userId, experiences: data }
      });
    } catch (error) {
      console.error("Error fetching experiences:", error.message);
      dispatch({ type: "FETCH_EXPERIENCE_FAILURE", payload: error.message });
    }
  };

//////////////////////////

export const uploadImage =
  (file, userId, expId = null) =>
  async (dispatch) => {
    dispatch({ type: "UPLOAD_IMAGE_REQUEST" });

    try {
      const formData = new FormData();
      formData.append(expId ? "experience" : "profile", file);

      const url = expId
        ? `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`
        : `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZWE2OTBlYTI4NjAwMTUyOGI5MmYiLCJpYXQiOjE3MzQzNTY0NTUsImV4cCI6MTczNTU2NjA1NX0.X61mMDeti0CulgtJD66RJBppasMKOd6Dc4bExnJ7YGI"
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await response.json();
      dispatch({ type: "UPLOAD_IMAGE_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "UPLOAD_IMAGE_FAILURE", payload: error.message });
    }
  };
