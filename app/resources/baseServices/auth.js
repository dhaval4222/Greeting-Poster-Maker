import { callApiGet, callApiPost } from "./baseApi";
import API from "../../constants/baseApi";

export const login = (data = {}) => callApiPost({ url: API.login, data });

export const register = (data = {}) => callApiPost({ url: API.ABCD, data });
