import axios from "axios";
import { chownSync } from "fs";

const base_url = "http://localhost:8080/users/";

const registerUser = async (user: any) => {
    return axios.post(`${base_url}register`, user) // Use backticks here
        .then(res => res.data)
        .catch(error => { throw error; });
};

const loginUser = async (login: any) => {
    return axios.post(`${base_url}login`, login) // Use backticks here
        .then(res => res.data)
        .catch(error => { throw error; });
};

const sendOtp = async (email: any) => {
    return axios.post(`${base_url}sendOtp/${email}`) // Use backticks here
        .then(res => res.data)
        .catch(error => { throw error; });

}

const verifyOtp = async (email: any, otp: any) => {
    return axios.get(`${base_url}verifyOtp/${email}/${otp}`) // Use backticks here
        .then(res => res.data)
        .catch(error => { throw error; });

}

const changepass = async (email: string, password: string) => {
    return axios.post(`${base_url}changePass`, { email, password }) // Use backticks here
        .then(res => res.data)
        .catch(error => { throw error; });

}

export { registerUser, loginUser, sendOtp, verifyOtp, changepass };
