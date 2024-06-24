import AsyncStorage from "@react-native-async-storage/async-storage";
import { logError } from "./logging";

const TOKEN_KEY = "@auth_token";
const USER_DETAILS = "@user_details";
const FIRST_LAUNCH = "@first_launch";

export const setAuthToken = async (value = "") => {
  try {
    // await AsyncStorage.setItem(TOKEN_KEY, value);
    await AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(value));
  } catch (err) {
    logError(err, "[setAuthToken] AsyncStorage Error");
  }
};

export const getAuthToken = async () => {
  try {
    return await AsyncStorage.getItem(TOKEN_KEY);
  } catch (err) {
    logError(err, "[getAuthToken] AsyncStorage Error");

    return null;
  }
};

export const removeAuthToken = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (err) {
    logError(err, "[removeAuthToken] AsyncStorage Error");
  }
};

export const clearAsyncStorage = async () => {
  try {
    AsyncStorage.clear();
  } catch (err) {
    logError(err, "[clearStorage] AsyncStorage Error");
  }
};

export const authHeader = async () => {
  let token = await getAuthToken();
  try {
    token = JSON.parse(token);
  } catch (error) {
    token = token;
  }

  return token ? { Authorization: `${token}` } : {};
};

export const setUserDetails = async (value) => {
  try {
    await AsyncStorage.setItem(USER_DETAILS, value);
  } catch (err) {
    logError(err, "[setUserDetails] AsyncStorage Error");
  }
};

export const getUserDetails = async () => {
  try {
    return await AsyncStorage.getItem(USER_DETAILS);
  } catch (err) {
    logError(err, "[getUserDetails] AsyncStorage Error");
  }
};

export const setFirstLaunch = async (value) => {
  try {
    await AsyncStorage.setItem(FIRST_LAUNCH, value);
  } catch (err) {
    logError(err, "[setFirstLaunch] AsyncStorage Error");
  }
};

export const getFirstLaunch = async () => {
  try {
    return await AsyncStorage.getItem(FIRST_LAUNCH);
  } catch (err) {
    logError(err, "[getFirstLaunch] AsyncStorage Error");
  }
};
