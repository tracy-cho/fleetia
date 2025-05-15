/**
 *
 * @param widget_colors
 * @param key 구분자로 사용하는 키를 입력한다. 없으면 무시.
 */
const widgetColorSetting = (
  widget_colors: { [key: string]: string } = { point_color: "#4ba4f8" },
  key?: string
) => {
  Object.keys(widget_colors).forEach(i => {
    document.documentElement.style.setProperty(
      `--reviewAid-widget-${key ? key + "-" : ""}${i}`,
      widget_colors[i]
    );
  });
};

export { widgetColorSetting };
