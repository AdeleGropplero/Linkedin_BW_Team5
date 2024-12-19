// Action Types
export const FETCH_JOBS_START = "FETCH_JOBS_START";
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const FETCH_JOBS_FAILURE = "FETCH_JOBS_FAILURE";

// Action Creators
export const fetchJobsStart = () => ({
  type: FETCH_JOBS_START
});

export const fetchJobsSuccess = (jobs) => ({
  type: FETCH_JOBS_SUCCESS,
  payload: jobs
});

export const fetchJobsFailure = (error) => ({
  type: FETCH_JOBS_FAILURE,
  payload: error
});

// Async Action (Thunk)
export const fetchJobs =
  (query = "") =>
  async (dispatch) => {
    dispatch(fetchJobsStart());
    try {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`);
      if (response.ok) {
        const data = await response.json();
        dispatch(fetchJobsSuccess(data.data));
      } else {
        dispatch(fetchJobsFailure("error during fetch"));
      }
    } catch (error) {
      dispatch(fetchJobsFailure(error.message));
    }
  };

export const fetchJobsByCompany = (companyName) => async (dispatch) => {
  dispatch(fetchJobsStart());
  try {
    const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?company=${companyName}`);
    if (response.ok) {
      const data = await response.json();
      dispatch(fetchJobsSuccess(data.data));
    } else {
      dispatch(fetchJobsFailure("error during fetch"));
    }
  } catch (error) {
    dispatch(fetchJobsFailure(error.message));
  }
};

export const fetchJobsByCategory = (category) => async (dispatch) => {
  dispatch(fetchJobsStart());
  try {
    const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?category=${category}&limit=10`);
    if (response.ok) {
      const data = await response.json();
      dispatch(fetchJobsSuccess(data.data));
    } else {
      dispatch(fetchJobsFailure("error during fetch"));
    }
  } catch (error) {
    dispatch(fetchJobsFailure(error.message));
  }
};
