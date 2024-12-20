const initialState = {
  comments: [],
  allComments: [],
  isLoading: false,
  error: null
};

import {
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  FETCH_COMMENTS_START,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE
} from "../actions/commentsActions";

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT_START:
      return {
        ...state,
        isLoading: true
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: [...state.comments, action.payload]
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case FETCH_COMMENTS_START:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_COMMENTS_SUCCESS:
      console.log("I'm here :", action.payload);
      return {
        ...state,
        isLoading: false,
        allComments: action.payload
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default commentsReducer;
