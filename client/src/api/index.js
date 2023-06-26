import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });
API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token
            }`;
    }

    return req;
});


export const signIn = (userData) => API.post("/client/signin", userData);
export const signup = (userData) => API.post("/client/signup", userData);
export const changepass = (userData) => API.put("/client/changePassword", userData);
export const resetchangepassword = (userData) => API.put("/client/resetChangePassword", userData);
export const resetpass = (userData) => API.post("/client/resetPassword", userData);


export const fetchCategories = () => API.get("/category");
export const fetchCategory = (id) => API.get(`${"/category"}/${id}`);


export const fetchCourseDetail = (id) => API.get(`${"/course"}/${id}`);

export const createOrder = (newModel) => API.post("/order", newModel);

export const fetchCustomer = (custId) => API.get(`customer/${custId}`);