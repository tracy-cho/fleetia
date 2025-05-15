import axios, { AxiosRequestConfig } from "axios";

type GetResponse = string | object;

export const get = (
  url: string,
  data?: Record<string, unknown>,
  config?: AxiosRequestConfig
): Promise<GetResponse> => {
  return axios
    .get(
      url + data
        ? "?" +
            Object.entries(data ?? {})
              .filter(([, value]) => value !== undefined)
              .map(
                ([key, value]) =>
                  `${key}=${
                    typeof value === "object" ? JSON.stringify(value) : value
                  }`
              )
              .join("&")
        : "",
      config
    )
    .then(response =>
      typeof response.data === "string"
        ? response.data
        : JSON.parse(response.data)
    );
};
