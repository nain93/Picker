import axios from "axios";

const api = axios.create({
  baseURL: "https://pickn.sucon.kr",
  headers: {
    Authentication: "V4PdyMyGWxlrWQYmB6bi",
    Wallet: "SWiWPaYyatSqVFTY81GmWbmUY7sSGk6avZyaeC2rVYzUcRbY",
  },
});

export const noticeApi = {
  getNotice: () =>
    api.get("/", {
      params: {
        page: 0,
        count: 10,
        lang: 0,
      },
    }),
  getData: () => api.post("https://pickn.sucon.kr"),
};
