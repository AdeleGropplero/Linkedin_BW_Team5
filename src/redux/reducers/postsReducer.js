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
        allPosts: action.payload
      };
    case "FETCH_ALL_POSTS_FAILURE":
      return {
        ...state,
        allPostsLoading: false,
        allPostsError: action.payload
      };
    ////////////////////////////////////////////

    case "NEW_POST_REQUEST":
      return { ...state, loading: true, error: null };

    case "NEW_POST_SUCCESS":
      console.log("Data", action.payload);
      return {
        ...state,
        loading: false,

        allPosts: [...state.allPosts, action.payload]
      };

    case "NEW_POST_FAILURE":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default postsReducer;
