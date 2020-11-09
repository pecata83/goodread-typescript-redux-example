import Axios from "axios";
import * as types from "@constants/action-types";
import parser from "fast-xml-parser";
import { useRouter } from "next/router";

import {
  API_KEY,
  GOODREAD_SEARCH_ENDPOINT,
  GOODREAD_AUTHOR_ENDPOINT,
  GOODREAD_AUTHOR_BOOKS_ENDPOINT,
  CORS_EVERYWHERE_HEROKU,
} from "@constants/goodread-api";

export function searchInit(payload: {}) {
  return { type: types.SEARCH_INIT, payload };
}

export function emptySearch() {
  return { type: types.EMPTY_SEARCH_TEXT };
}

export function startSearch(payload: string) {
  return function (dispatch) {
    dispatch({ type: types.SEARCH_STARTED, payload });
    const url = `${
      CORS_EVERYWHERE_HEROKU + GOODREAD_SEARCH_ENDPOINT
    }?key=${API_KEY}&q=${payload}`;

    return Axios.get(url)
      .then((response) => parser.parse(response.data))
      .then((res) => {
        console.log(res);
        dispatch({
          type: types.SEARCH_DATA_LOADED,
          payload: res.GoodreadsResponse.search,
        });
      });
  };
}

export function selectAuthor(payload: {}) {
  return { type: types.SELECT_AUTHOR, payload };
}

export function startAuthorSearch(payload?: { authorId: number }) {
  console.log(payload);
  return async function (dispatch) {
    dispatch({ type: types.SEARCH_AUTHOR_STARTED, payload });
    const url = `${CORS_EVERYWHERE_HEROKU + GOODREAD_AUTHOR_ENDPOINT}${
      payload.authorId
    }?key=${API_KEY}`;

    try {
      await Axios.get(url)
        //   .then((response) => parseXMLResponse(response.data))
        .then((response) => parser.parse(response.data))
        .then((res) => {
          return dispatch({
            type: types.AUTHOR_DATA_LOADED,
            payload: res.GoodreadsResponse.author,
          });
        });
    } catch (e) {
      console.log(e);
    }
  };
}

export function startAuthorBooksSearch(payload?: { authorId: number }) {
  console.log(payload);
  return async function (dispatch) {
    dispatch({ type: types.SEARCH_AUTHOR_BOOKS_STARTED, payload });
    const url = `${CORS_EVERYWHERE_HEROKU + GOODREAD_AUTHOR_BOOKS_ENDPOINT}${
      payload.authorId
    }?key=${API_KEY}`;

    try {
      await Axios.get(url)
        //   .then((response) => parseXMLResponse(response.data))
        .then((response) => parser.parse(response.data))
        .then((res) => {
          console.log(res);
          return dispatch({
            type: types.SEARCH_AUTHOR_BOOKS_LOADED,
            payload: res.GoodreadsResponse.author,
          });
        });
    } catch (e) {
      console.log(e);
    }
  };
}
