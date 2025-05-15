type paramType = {
  start?: string;
  end?: string;
  page?: number;
  limit?: number;
  offset?: number;
  [key: string]: any;
};

export const parameter = {
  getPage: ({
    page: _page,
    offset: _offset = 0,
    limit: _limit = 6,
    ...param
  }: paramType) => {
    const page = _page || _offset / _limit || 1;
    return {
      ...param,
      page
    };
  },
  getInfinity: ({
    page: _page = 1,
    offset: _offset,
    limit: _limit,
    start,
    end,
    ...param
  }: paramType) => {
    const limit = _limit || 6;
    const offset = _offset || (_page - 1) * limit || 0;
    return {
      ...param,
      offset,
      limit
    };
  }
};
