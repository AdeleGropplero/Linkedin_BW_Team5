const initialState = {
  data: null,
  loading: false,
  error: null,
  allProfiles: [],
  allProfilesLoading: false,
  allProfilesError: null
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PROFILE_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_PROFILE_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_PROFILE_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case "FETCH_ALL_PROFILES_REQUEST":
      return { ...state, allProfilesLoading: true, allProfilesError: null };
    case "FETCH_ALL_PROFILES_SUCCESS":
      return { ...state, allProfilesLoading: false, allProfiles: action.payload };
    case "FETCH_ALL_PROFILES_FAILURE":
      return { ...state, allProfilesLoading: false, allProfilesError: action.payload };

    default:
      return state;
  }
};
export default profileReducer;
