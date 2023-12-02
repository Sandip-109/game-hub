import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2be3017a41504c89b7bf2983cc4ccc92",
  },
});
