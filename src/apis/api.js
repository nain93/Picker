import axios from "axios";

const api = axios.create({
<<<<<<< Updated upstream
  baseURL: "http://localhost:3000",
  headers: {
    Authentication: "V4PdyMyGWxlrWQYmB6bi",
    Wallet: "SWiWPaYyatSqVFTY81GmWbmUY7sSGk6avZyaeC2rVYzUcRbY",
  },
=======
  baseURL: "https://pickn.sucon.kr",
>>>>>>> Stashed changes
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
  getData: () => {
    api.defaults.headers.common["Authentication"] = "V4PdyMyGWxlrWQYmB6bi";
    api.defaults.headers.common["Wallet"] =
      "SWiWPaYyatSqVFTY81GmWbmUY7sSGk6avZyaeC2rVYzUcRbY";
    return api.post("/", null, { withCredentials: true });
  },
};
