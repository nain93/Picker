import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authentication: "V4PdyMyGWxlrWQYmB6bi",
    Wallet: "SWiWPaYyatSqVFTY81GmWbmUY7sSGk6avZyaeC2rVYzUcRbY",
  },
});

export const noticeApi = {
  getNotice: () =>
    api({
      method: "post",
      url: "/",
      data: {
        method: "GetNoticeList",
        params: {
          page: 0,
          count: 10,
          lang: 0,
        },
      },
      withCredentials: true,
    }),
  getData: () => api.post("https://pickn.sucon.kr"),
};
