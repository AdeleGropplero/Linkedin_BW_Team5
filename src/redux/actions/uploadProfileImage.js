export const uploadProfileImage = (file, userId) => async (dispatch) => {
  dispatch({ type: "UPLOAD_IMAGE_REQUEST" });

  try {
    const formData = new FormData();
    formData.append("profile", file);

    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`, {
      method: "POST",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYyOThjZDUzMDRhNzAwMTUxNDhiYTYiLCJpYXQiOjE3MzQ1MTQ4OTMsImV4cCI6MTczNTcyNDQ5M30.W5pw7kwzkkIj0vjXYWwmT8lHsoMAejLE2Lp6BTWLbYo`
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
