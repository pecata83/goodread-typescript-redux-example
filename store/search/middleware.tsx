import { SEARCH_INIT, AUTHOR_SEARCH_INIT } from "@constants/action-types";
import {
  emptySearch,
  startSearch,
  startAuthorSearch,
} from "@store/search/actions";

export function searchTextMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === SEARCH_INIT) {
        if (action.payload.searchText.length === 0) {
          return dispatch(emptySearch());
        } else return dispatch(startSearch(action.payload.searchText));
      }
      return next(action);
    };
  };
}
