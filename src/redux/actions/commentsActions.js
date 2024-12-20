export const ADD_COMMENT_START = "ADD_COMMENT_START";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const FETCH_COMMENTS_START = "FETCH_COMMENTS_START";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE";

export const addCommentStart = () => ({
  type: ADD_COMMENT_START
});

export const addCommentSuccess = (comment) => ({
  type: ADD_COMMENT_SUCCESS,
  payload: comment
});

export const addCommentFailure = (error) => ({
  type: ADD_COMMENT_FAILURE,
  payload: error
});

export const addComment = (commentText, postId, token) => async (dispatch) => {
  dispatch(addCommentStart());
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        comment: commentText,
        rate: "5",
        elementId: postId
      })
    });

    if (response.ok) {
      const comment = await response.json();
      dispatch(addCommentSuccess(comment));
    } else {
      throw new Error("Failed to add comment");
    }
  } catch (error) {
    dispatch(addCommentFailure(error.message));
  }
};

/////////////////////////

export const fetchCommentsStart = () => ({
  type: FETCH_COMMENTS_START
});

export const fetchCommentsSuccess = (comments) => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: comments
});

export const fetchCommentsFailure = (error) => ({
  type: FETCH_COMMENTS_FAILURE,
  payload: error
});

export const fetchAllComments = (token) => async (dispatch) => {
  dispatch(fetchCommentsStart());
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.ok) {
      const comments = await response.json();
      dispatch(fetchCommentsSuccess(comments));
      console.log("I'm here :", comments);
    } else {
      throw new Error("Failed to fetch comments");
    }
  } catch (error) {
    dispatch(fetchCommentsFailure(error.message));
  }
};
