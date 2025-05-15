import { allowImage } from "../allowImage";

const stringList = [
  "asd",
  "temp.jpeg",
  "https://test.com/asd.jpg",
  "https://test.com/asdasdasd.hcif?asd=asd&aa=bac",
  "https://test.com/asdasdasd.gif?asd=asd&aa=bac"
];

const objectList = [
  { url: "asd", temp: 0 },
  { url: "temp.jpeg", temp: 0, asd: { temp2: "a" } },
  { url: "https://test.com/asd.jpg", temp: 0 },
  { url: "https://test.com/asd.JPG", temp: 0 },
  {
    url: "https://test.com/asdasdasd.hcif?asd=asd&aa=bac",
    test: [],
    aa: {},
    temp: 0
  },
  { url: "https://test.com/asdasdasd.gif?asd=asd&aa=bac", temp: 0 },
  { noUrl: "aa" }
];

test("array check", () => {
  expect(allowImage(stringList)).toEqual([
    "temp.jpeg",
    "https://test.com/asd.jpg",
    "https://test.com/asdasdasd.gif?asd=asd&aa=bac"
  ]);
});

test("object check", () => {
  expect(allowImage({ imageKey: "url", list: objectList })).toEqual([
    { url: "temp.jpeg", temp: 0, asd: { temp2: "a" } },
    { url: "https://test.com/asd.jpg", temp: 0 },
    { url: "https://test.com/asd.JPG", temp: 0 },
    { url: "https://test.com/asdasdasd.gif?asd=asd&aa=bac", temp: 0 }
  ]);
});
