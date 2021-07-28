import {
  GET_CHARACTERS,
  GET_CHARACTERS_ERROR,
  ADD_TAG,
  REMOVE_TAG,
} from '../actions/types';

const initialState = [];

export default function characters(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CHARACTERS:
      return [...state].concat(payload);

    case GET_CHARACTERS_ERROR: {
      return {
        ...state,
        error: payload,
      };
    }
    case ADD_TAG: {
      const { characterIndex, tag } = payload;
      if (state[characterIndex].tags.includes(tag)) {
        alert('Tag has already been added');
        return state;
      }
      const updatedCharacter = {
        ...state[characterIndex],
        tags: state[characterIndex].tags.concat(tag),
      };

      return state.map((character, index) => {
        if (index !== characterIndex) {
          return character;
        } else {
          return {
            ...updatedCharacter,
          };
        }
      });
    }
    case REMOVE_TAG: {
      const { characterIndex, tagToRemove } = payload;

      const updatedCharacter = {
        ...state[characterIndex],
        tags: state[characterIndex].tags.filter((tag) => tag !== tagToRemove),
      };
      return state.map((character, index) => {
        if (index !== characterIndex) {
          return character;
        } else {
          return {
            ...updatedCharacter,
          };
        }
      });
    }

    default: {
      return state;
    }
  }
}
