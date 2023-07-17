import axios from "axios";

const serverApi = "https://identy.cloud:5000";

export const getRoomExists = async (roomId) => {
  const response = await axios.get(`${serverApi}/api/room-exists/${roomId}`);
  return response.data;
};

export const getTURNCredentials = async () => {
  const response = await axios.get(`${serverApi}/api/get-turn-credentials`);
  return response.data;
};
