import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

type PostResponse = string | object;

const cleanedData = (data?: Record<string, unknown>) =>
  Object.entries(data ?? {})
    .filter(([, value]) => value !== undefined)
    .reduce((acc: { [key: string]: any }, [key, value]) => {
      if (Object.prototype.hasOwnProperty.call(acc, key)) {
        acc[key] = value;
      }
      return acc;
    }, {});

export const post = (
  url: string,
  data?: Record<string, unknown>,
  config?: AxiosRequestConfig
): Promise<PostResponse> =>
  axios
    .post(url, cleanedData(data), config)
    .then<AxiosResponse<PostResponse>>(response =>
      typeof response.data === "string"
        ? response.data
        : JSON.parse(response.data)
    );
