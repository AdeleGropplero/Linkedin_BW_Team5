export const uploadProfileImage = (file, userId) => async (dispatch) => {
  dispatch({ type: "UPLOAD_IMAGE_REQUEST" });

  try {
    const formData = new FormData();
    formData.append("profile", file);

    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`, {
      method: "POST",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZWE2OTBlYTI4NjAwMTUyOGI5MmYiLCJpYXQiOjE3MzQzNTY0NTUsImV4cCI6MTczNTU2NjA1NX0.X61mMDeti0CulgtJD66RJBppasMKOd6Dc4bExnJ7YGI`
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
