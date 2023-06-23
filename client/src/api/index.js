import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });



export const signIn = (userData) => API.post("/client/signin", userData);
export const signup = (userData) => API.post("/client/signup", userData);
export const changepass = (userData) => API.put("/client/changePassword", userData);
export const resetchangepassword = (userData) => API.put("/client/resetChangePassword", userData);
export const resetpass = (userData) => API.post("/client/resetPassword", userData);


export const fetchCategories = () => API.get("/category");
export const fetchCategory = (id) => API.get(`${"/category"}/${id}`);


export const fetchCourseDetail = (id) => API.get(`${"/course"}/${id}`);