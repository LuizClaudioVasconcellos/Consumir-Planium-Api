import axios from "../index";

export default async function add(payload) {
  return new Promise((resolve, reject) => {
    try {
      const response = axios.post("/add_ben", payload);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
}
