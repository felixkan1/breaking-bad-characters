import {
  GET_CHARACTERS,
  GET_CHARACTERS_ERROR,
  ADD_TAG,
  REMOVE_TAG,
} from './types';
import { getAllCharacters } from '../utils/api';

export const getCharactersProfile = () => async (dispatch) => {
  try {
    const res = await getAllCharacters();

    //add tags property to each character
    res.forEach((character) => (character.tags = []));

    dispatch({
      type: GET_CHARACTERS,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: GET_CHARACTERS_ERROR,
      payload: err,
    });
  }
};

export const addTag = (characterIndex, tag) => (dispatch) => {
  dispatch({
    type: ADD_TAG,
    payload: { characterIndex, tag },
  });
};

export const removeTag = (characterIndex, tagToRemove) => (dispatch) => {
  dispatch({
    type: REMOVE_TAG,
    payload: { characterIndex, tagToRemove },
  });
};
