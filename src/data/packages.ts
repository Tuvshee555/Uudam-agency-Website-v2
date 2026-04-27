export type PackageMeta = {
  slug: string;
  price: string;
  image: string;
};

export const packages: PackageMeta[] = [
  { slug: "fuji-blossoms", price: "2,830,000₮", image: "/destinations/fuji-blossoms.jpg" },
  { slug: "cappadocia", price: "4,590,000₮", image: "/destinations/cappadocia.jpg" },
  { slug: "forbidden-city", price: "1,690,000₮", image: "/destinations/forbidden-city.jpg" },
  { slug: "tianmen", price: "2,550,000₮", image: "/destinations/tianmen.jpg" },
  { slug: "zhangjiajie", price: "3,450,000₮", image: "/destinations/zhangjiajie.jpg" },
  { slug: "bangkok", price: "3,550,000₮", image: "/destinations/bangkok-temple.jpg" },
  { slug: "glass-bridge", price: "2,830,000₮", image: "/destinations/glass-bridge.jpg" },
  { slug: "tokyo", price: "4,290,000₮", image: "/destinations/tokyo-shibuya.jpg" },
  { slug: "chongqing", price: "1,890,000₮", image: "/destinations/chongqing.jpg" },
  { slug: "shanghai", price: "4,590,000₮", image: "/destinations/shanghai.jpg" },
];
