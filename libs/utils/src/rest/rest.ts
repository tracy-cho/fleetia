import Axios from "axios";

export const _put = async (
  url: string,
  data?: { [key: string]: any },
  config?: object
) => {
  return (await Axios.put(url, data, config)).data;
};
export const _patch = async (
  url: string,
  data?: { [key: string]: any },
  config?: object
) => {
  return (await Axios.patch(url, data, config)).data;
};

export const _delete = async (url: string, config?: object) => {
  return await Axios.delete(url, config);
};
