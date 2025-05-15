type originType = "design-system" | "admin" | "widget";

const Console = {
  badge: "padding: 2px 5px; color:white;border-radius:3px 0 0 3px",
  productionBadge() {
    return "background-color:#4ba4f8;" + this.badge;
  },
  text: "background-color:white;padding:2px 5px;color:black;border-radius:0 3px 3px 0",
  log(text: string) {
    console.log(`%c🍹리뷰에이드%c${text}`, this.productionBadge(), this.text);
  },
  error(text: string, origin?: originType) {
    if (origin) {
      console.error(
        `%c🍹${origin}%c${text}`,
        `${this.badge};background-color:red;padding: 2px 3px; color : white`,
        this.text
      );
    } else {
      console.log(
        `%c🍹리뷰에이드%cE%c${text}`,
        this.productionBadge(),
        "background-color:#eb0f36;padding: 2px 3px; color : white",
        this.text
      );
    }
  },
  warn(text: string, origin?: originType) {
    if (origin) {
      console.warn(
        `%c🍹${origin}%c${text}`,
        `${this.badge};background-color:orange;padding: 2px 3px; color : black`,
        this.text
      );
    } else {
      console.log(
        `%c🍹리뷰에이드%cW%c${text}`,
        this.productionBadge(),
        "background-color:#48bc02;padding: 2px 3px; color : white",
        this.text
      );
    }
  }
};

export { Console };
