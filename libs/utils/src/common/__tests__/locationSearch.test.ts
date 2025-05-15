import { locationSearch } from "../locationSearch";

const state = {
  is_active: true,
  is_review_rating_active: true,
  is_aspect_graph_active: true,
  is_review_images_active: true,
  is_product_recommend_active: true,
  num_of_aspects: 4,
  is_rolling_effect_active: false,
  is_review_text_active: true,
  widget_colors: {
    point_color: "#049f2b",
    graph_color: "#f22121",
    graph_text_color: "#ffffff"
  }
};

test("get", () => {
  expect(locationSearch.get()).toEqual({
    mall_id: "onmydev",
    product_no: "25",
    type: "cafe24",
    origin: "http://localhost:63342",
    jsUrl: "http://localhost:3000"
  });
});

test("origin", () => {
  expect(locationSearch.origin()).toBe("http://localhost:63342");
});

test("stringify", () => {
  expect(locationSearch.stringify(state)).toBe(
    "?is_active=true&is_review_rating_active=true&is_aspect_graph_active=true&is_review_images_active=true&is_product_recommend_active=true&num_of_aspects=4&is_review_text_active=true&widget_colors=%7B%22point_color%22%3A%22%23049f2b%22%2C%22graph_color%22%3A%22%23f22121%22%2C%22graph_text_color%22%3A%22%23ffffff%22%7D"
  );
});
