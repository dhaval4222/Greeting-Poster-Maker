import produce from 'immer';

const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
const SET_FRAME_DATA = "SET_FRAME_DATA";
const SET_DEVICE_ID = "SET_DEVICE_ID";
const REMOVE_AUTH_TOKEN = 'REMOVE_AUTH_TOKEN';

const initialState = {
  authToken: "",
  deviceId: "",
  frameData: [],
};

// reducer
export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_AUTH_TOKEN:
        draft.authToken = action.payload;
        break;
      case SET_DEVICE_ID:
        draft.deviceId = action.payload;
        break;
      case SET_FRAME_DATA:
        draft.frameData = action.payload;
        break;
      case REMOVE_AUTH_TOKEN:
        draft.authToken = "";
        break;
    }
  });

export const setAuthTokenAction = (value = '') => ({
  type: SET_AUTH_TOKEN,
  payload: value,
});
export const setFrameDataAction = (value = "") => ({
  type: SET_FRAME_DATA,
  payload: value,
});
export const setDeviceIdAction = (value = "") => ({
  type: SET_DEVICE_ID,
  payload: value,
});
export const removeAuthTokenAction = () => ({
  type: REMOVE_AUTH_TOKEN,
});
