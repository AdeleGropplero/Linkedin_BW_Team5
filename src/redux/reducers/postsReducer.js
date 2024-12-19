const initialState = {
  allPosts: [],
  allPostsLoading: false,
  allPostsError: null
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_POSTS_REQUEST":
      return {
        ...state,
        allPostsLoading: true,
        allPostsError: null
      };
    case "FETCH_ALL_POSTS_SUCCESS":
      return {
        ...state,
        allPostsLoading: false,
        allPosts: [...state.allPosts, action.payload]
      };
    case "FETCH_ALL_POSTS_FAILURE":
      return {
        ...state,
        allPostsLoading: false,
        allPostsError: action.payload
      };

    default:
      return state;
  }
};
export default postsReducer;
