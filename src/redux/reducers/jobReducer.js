import { FETCH_JOBS_START, FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILURE } from "../actions/jobsActions";

const initialState = {
  jobs: [],
  isLoading: false,
  error: null
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_START:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jobs: action.payload
      };
    case FETCH_JOBS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default jobsReducer;
