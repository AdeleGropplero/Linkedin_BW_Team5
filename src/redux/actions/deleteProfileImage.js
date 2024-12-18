import placeholderImage from "../../assets/images/placeholder.jpg";
const token = import.meta.env.VITE_AUTH_TOKEN;
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
        Authorization: `Bearer ${token}`
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
