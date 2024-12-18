import placeholderImage from "../../assets/images/placeholder.jpg";

export const deleteProfileImage = (userId) => async (dispatch) => {
  dispatch({ type: "DELETE_IMAGE_REQUEST" });

  try {
    const formData = new FormData();

    const responseImage = await fetch(placeholderImage);
    const blob = await responseImage.blob();
    const placeholderFile = new File([blob], "placeholder.jpg", { type: "image/jpeg" });

    formData.append("profile", placeholderFile);

    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`, {
      method: "POST",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZWE2OTBlYTI4NjAwMTUyOGI5MmYiLCJpYXQiOjE3MzQzNTY0NTUsImV4cCI6MTczNTU2NjA1NX0.X61mMDeti0CulgtJD66RJBppasMKOd6Dc4bExnJ7YGI`
      },
      body: formData
    });

    if (!response.ok) {
      throw new Error("Failed to upload placeholder image");
    }

    const updatedData = await response.json();
    dispatch({ type: "DELETE_IMAGE_SUCCESS", payload: updatedData });
  } catch (error) {
    dispatch({ type: "DELETE_IMAGE_FAILURE", payload: error.message });
  }
};
