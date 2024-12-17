const initialState = {
  data: null,
  loading: false,
  error: null,
  allExperience: [],
  allExperienceLoading: false,
  allExperienceError: null
};

export const ExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EXPERIENCE_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_EXPERIENCE_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_EXPERIENCE_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case "FETCH_ALL_EXPERIENCES_REQUEST":
      return { ...state, allExperienceLoading: true, allExperienceError: null };
    case "FETCH_ALL_EXPERIENCES_SUCCESS":
      return { ...state, allExperienceLoading: false, allExperience: action.payload };
    case "FETCH_ALL_EXPERIENCES_FAILURE":
      return { ...state, allExperienceLoading: false, allExperienceError: action.payload };

    default:
      return state;
  }
};
export default ExperienceReducer;
