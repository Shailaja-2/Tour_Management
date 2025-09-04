import axios from "axios";

// Base URL of your backend (Render)
const BASE_URL = "https://tour-server-3vk8.onrender.com/api/v1";

/* ---------------- AUTH ---------------- */
export const registerUser = (formData) => axios.post(`${BASE_URL}/auth/register`, formData);
export const loginUser = (formData) => axios.post(`${BASE_URL}/auth/login`, formData);

/* ---------------- USERS ---------------- */
export const updateUser = (id, updatedUser) => axios.put(`${BASE_URL}/users/${id}`, updatedUser);
export const deleteUser = (id) => axios.delete(`${BASE_URL}/users/${id}`);
export const getUserById = (id) => axios.get(`${BASE_URL}/users/${id}`);
export const getUsers = () => axios.get(`${BASE_URL}/users`); // admin only

/* ---------------- TOURS ---------------- */
export const getTours = () => axios.get(`${BASE_URL}/tours`);
export const getTourById = (id) => axios.get(`${BASE_URL}/tours/${id}`);
export const createTour = (newTour) => axios.post(`${BASE_URL}/tours`, newTour);
export const updateTour = (id, updatedTour) => axios.put(`${BASE_URL}/tours/${id}`, updatedTour);
export const deleteTour = (id) => axios.delete(`${BASE_URL}/tours/${id}`);
export const getTourBySearch = (query) => axios.get(`${BASE_URL}/tours/search/getTourBySearch?${query}`);
export const getFeaturedTours = () => axios.get(`${BASE_URL}/tours/search/getFeaturedTours`);
export const getTourCount = () => axios.get(`${BASE_URL}/tours/search/getTourCount`);

/* ---------------- REVIEWS ---------------- */
export const createReview = (tourId, review) => axios.post(`${BASE_URL}/review/${tourId}`, review);

/* ---------------- BOOKINGS ---------------- */
export const createBooking = (newBooking) => axios.post(`${BASE_URL}/booking`, newBooking);
export const getBookingById = (id) => axios.get(`${BASE_URL}/booking/${id}`);
export const getBookings = () => axios.get(`${BASE_URL}/booking`); // admin only
