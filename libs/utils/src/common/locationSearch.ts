type objectType = { [key: string]: string };

const locationSearch = {
  get: (location?: string): objectType =>
    (location ? location : window.location.search)
      .replace("?", "")
      .split("&")
      .filter(Boolean)
      .reduce((a, c) => {
        const [key, value] = c.split("=");
        a[key] = decodeURIComponent(value);
        return a;
      }, {} as objectType),

  stringify: (url: {
    [key: string]: string | object | boolean | number;
  }): string =>
    Object.keys(url)
      .reduce((acc, cur) => {
        const val = url[cur];
        const type = typeof val;

        return val
          ? `${acc}${cur}=${
              type === "object" ? encodeURIComponent(JSON.stringify(val)) : val
            }&`
          : acc;
      }, "?")
      .slice(0, -1),

  origin() {
    return this.get().origin;
  }
};

export { locationSearch };
