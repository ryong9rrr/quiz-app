import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const API_END_POINT = "https://opentdb.com/api.php";

const createInstance = (url: string, config: AxiosRequestConfig = {}): AxiosInstance => {
  return axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json",
    },
    ...config,
  });
};

const handleResponse = (res: AxiosResponse) => res;

const handleError = (error: AxiosError) => {
  if (error.response && error.response.status >= 500) {
    window.alert("죄송합니다. 현재 서버에 문제가 있는 것 같아요 😭");
    console.error(error);
  }

  return Promise.reject(error);
};

export default class Api {
  private readonly API_END_POINT = API_END_POINT;

  protected baseRequest: AxiosInstance;

  constructor() {
    const instance = createInstance(this.API_END_POINT);
    instance.interceptors.response.use(handleResponse, handleError);
    this.baseRequest = instance;
  }
}
