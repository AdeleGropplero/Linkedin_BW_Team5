const initialState = {
  userId: null,
  data: null,
  loading: false,
  error: null,

  allProfiles: [],
  allProfilesLoading: false,
  allProfilesError: null,

  searchResults: [],
  searchLoading: false,
  searchError: null
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_USER":
      return { ...state, userId: action.payload, data: null };
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

    case "SEARCH_PROFILES_REQUEST":
      return { ...state, searchLoading: true, searchError: null };
    case "SEARCH_PROFILES_SUCCESS":
      return { ...state, searchLoading: false, searchResults: action.payload };
    case "SEARCH_PROFILES_FAILURE":
      return { ...state, searchLoading: false, searchError: action.payload };

    case "UPLOAD_IMAGE_REQUEST":
      return { ...state, loading: true, error: null };

    case "UPLOAD_IMAGE_SUCCESS":
      return { ...state, loading: false, data: { ...state.data, image: action.payload.image } };

    case "UPLOAD_IMAGE_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case "DELETE_IMAGE_REQUEST":
      return { ...state, loading: true, error: null };

    case "DELETE_IMAGE_SUCCESS":
      return { ...state, loading: false, data: { ...state.data, image: null } };

    case "DELETE_IMAGE_FAILURE":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default profileReducer;
