import axios from "axios";

const API_URL = "/api/gallery";

const createFormData = async (formData) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  const location = await axios.post(API_URL, formData, config);
  return location;
};

export default createFormData;
