const initialState = {
  experiences: [],
  loading: false,
  error: null
};

export const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EXPERIENCE_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_EXPERIENCE_SUCCESS":
      return { ...state, loading: false, experiences: action.payload };
    case "FETCH_EXPERIENCE_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case "UPLOAD_IMAGE_REQUEST":
      return { ...state, loading: true, error: null };
    case "UPLOAD_IMAGE_SUCCESS":
      return { ...state, loading: false, imageData: action.payload };
    case "UPLOAD_IMAGE_FAILURE":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default experienceReducer;