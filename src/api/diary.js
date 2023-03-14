import axios from "axios";

const getDiarys = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/diarys`
  );
  return response.data;
};
const addDiary = async (newDiary) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/diarys`, newDiary);
};

const removeDiary = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/diarys/${id}`);
};

export { getDiarys, addDiary, removeDiary };
