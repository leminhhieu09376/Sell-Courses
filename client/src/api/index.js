import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });



export const signIn = (userData) => API.post("/api/auth/login", userData);
export const signup = (userData) => API.post("/api/auth/register", userData);
export const changepass = (userData) => API.put("/client/changePassword", userData);
export const resetchangepassword = (userData) => API.put("/api/auth/forgotpassword-reset", userData);
export const resetpass = (userData) => API.post("/api/auth/forgotpassword", userData);



