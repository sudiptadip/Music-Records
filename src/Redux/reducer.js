import {
  GET_MUSIC_RECORD_FAILURE,
  GET_MUSIC_RECORD_REQUEST,
  GET_MUSIC_RECORD_SUCCESS,
} from "./actionType";

const initState = {
  musicRecord: [],
  isLooding: false,
  isErrer: false,
};

export const reducer = (oldState = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MUSIC_RECORD_REQUEST:
      return {
        ...oldState,
        isLooding: true,
        isErrer: false,
      };
    case GET_MUSIC_RECORD_SUCCESS:
      return {
        ...oldState,
        musicRecord: payload,
        isLooding: false,
        isErrer: false,
      };
    case GET_MUSIC_RECORD_FAILURE:
      return {
        ...oldState,
        isLooding: false,
        isErrer: true,
      };
    default:
      return oldState;
  }
};
