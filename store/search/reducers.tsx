import initialState from "../initialState";

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "search/started":
      return {
        ...state,
        searching: true,
        searchResult: null,
        searchResultItemsNumber: null,
        searchResultStart: null,
        searchResultEnd: null,
        selectedAuthorId: null,
        selectedAuthorName: null,
        selectedAuthor: null,
      };

    case "search/dataLoaded":
      return {
        ...state,
        searching: false,
        searchResultItemsNumber: action.payload["total-results"],
        searchResultStart: action.payload["results-start"],
        searchResultEnd: action.payload["results-end"],
        searchResult: arrayToObject(action.payload.results["work"]),
      };

    case "select/author":
      return {
        ...state,
        searching: true,
        // searchResultItemsNumber: null,
        // searchResultStart: null,
        // searchResultEnd: null,
        // searchResult: null,
        selectedAuthorId: action.payload.selectedAuthorId,
        selectedAuthorName: action.payload.selectedAuthorName,
      };

    case "search/authorDataLoaded":
      return {
        ...state,
        searching: false,
        selectedAuthor: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;

//utilty functions to convert array of objects into hash based JSON object
const arrayToObject = (array) =>
  array.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
