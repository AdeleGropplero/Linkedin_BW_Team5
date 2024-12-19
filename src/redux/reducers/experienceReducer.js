const initialState = {
  userId: null,
  expId: null,
  experiences: [],
  loading: false,
  error: null,
  allExperience: [],
  allExperienceLoading: false,
  allExperienceError: null
};

export const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EXPERIENCE_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_EXPERIENCE_SUCCESS":
      return { ...state, loading: false, experiences: action.payload };
    case "FETCH_EXPERIENCE_FAILURE":
      return { ...state, loading: false, error: action.payload };

    //////////////////////////////////////////////

    case "UPLOAD_IMAGE_REQUEST":
      return { ...state, loading: true, error: null };
    case "UPLOAD_IMAGE_SUCCESS":
      return { ...state, loading: false, imageData: action.payload };
    case "UPLOAD_IMAGE_FAILURE":
      return { ...state, loading: false, error: action.payload };

    ////////////////////////////////////////////

    case "UPDATE_EXPERIENCE_REQUEST":
      return { ...state, loading: true, error: null };

    case "UPDATE_EXPERIENCE_SUCCESS":
      return {
        ...state,
        loading: false,

        allExperience: state.allExperience.map((experience) => (experience._id === action.payload._id ? action.payload : experience))
      };

    case "UPDATE_EXPERIENCE_FAILURE":
      return { ...state, loading: false, error: action.payload };

    ///////////////////////////////////////

    case "FETCH_EXPERIENCES_REQUEST":
      return { ...state, loading: true, error: null };

    case "FETCH_EXPERIENCES_SUCCESS":
      return { ...state, loading: false, allExperience: action.payload };

    case "FETCH_EXPERIENCES_FAILURE":
      return { ...state, loading: false, error: action.payload };

    /////////////////////////////////////////////

    case "FETCH_ALL_EXPERIENCES_REQUEST":
      return { ...state, allExperienceLoading: true, allExperienceError: null };
    case "FETCH_ALL_EXPERIENCES_SUCCESS":
      console.log("FETCH_ALL_EXPERIENCES_SUCCESS - payload:", action.payload);
      return {
        ...state,
        allExperience: Array.isArray(action.payload) ? action.payload : []
      };
    case "FETCH_ALL_EXPERIENCES_FAILURE":
      return { ...state, allExperienceLoading: false, allExperienceError: action.payload };

    ////////////////////////////////////////

    case "DELETE_EXPERIENCE_REQUEST":
      return { ...state, loading: true, error: null };

    case "DELETE_EXPERIENCE_SUCCESS":
      return {
        ...state,
        allExperience: Array.isArray(state.allExperience) ? state.allExperience.filter((experience) => experience._id !== action.payload._id) : []
      };

    case "DELETE_EXPERIENCE_FAILURE":
      return { ...state, loading: false, error: action.payload };

    //////////////////////////////////////////////

    case "POST_EXPERIENCE_REQUEST":
      return {
        ...state,
        loading: true,
        error: null
      };

    case "POST_EXPERIENCE_SUCCESS":
      console.log("POST_EXPERIENCE_SUCCESS - allExperience before update:", state.allExperience);
      console.log("POST_EXPERIENCE_SUCCESS - payload:", action.payload);
      return {
        ...state,
        allExperience: Array.isArray(state.allExperience) ? [...state.allExperience, action.payload] : [action.payload]
      };

    case "POST_EXPERIENCE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
export default experienceReducer;
