// export backgroundFetch = () => async (dispatch) => {

//   try {
//     const response = await fetch(
//       `https://striveschool-api.herokuapp.com/api/profile?name=${query}`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     dispatch({ type: "SEARCH_PROFILES_SUCCESS", payload: data });
//   } catch (error) {
//     console.error("Error searching profiles:", error.message);
//     dispatch({ type: "SEARCH_PROFILES_FAILURE", payload: error.message });
//   }
// };
