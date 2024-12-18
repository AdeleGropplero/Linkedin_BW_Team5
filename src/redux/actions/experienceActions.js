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
          Authorization: `Bearer ${token}`
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

//////////////////////
export const updateExperience =
  (userId, expId, updatedData) => async (dispatch) => {
    dispatch({ type: "UPDATE_EXPERIENCE_REQUEST" });

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(updatedData)
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update experience");
      }

      const data = await response.json();
      dispatch({ type: "UPDATE_EXPERIENCE_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "UPDATE_EXPERIENCE_FAILURE", payload: error.message });
    }
  };
