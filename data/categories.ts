import type { Category } from "@/types/catalog";

// Product categories are kept separate from UI components so the catalogue can evolve independently.
export const categories = [
  {
    name: "Bags",
    slug: "bags",
    shortDescription: "Totes, pouches, and carrying options for everyday and gifting enquiries.",
    image: "/products/bags/printed-tote-bags/printed-tote-bag-1.jpeg",
  },
  {
    name: "Bottles",
    slug: "bottles",
    shortDescription: "Reusable bottles and flasks for everyday product enquiries.",
    image: "/products/bottles/reusable-water-bottle/reusable-water-bottle.jpeg",
  },
  {
    name: "Gifts & Storage",
    slug: "gifts-storage",
    shortDescription: "Jewellery boxes, storage boxes, and organisers for gifting conversations.",
    image: "/products/gifts/jewellery-box/jewellery-box.jpeg",
  },
  {
    name: "Kids",
    slug: "kids",
    shortDescription: "Playful product ideas for children’s gifting and return-gift enquiries.",
    image: "/products/kids/kids-camera-keychain/kids-camera-keychain.jpeg",
  },
  {
    name: "Kitchen",
    slug: "kitchen",
    shortDescription: "Kitchen storage products for everyday and business enquiries.",
    image: "/products/kitchen/stainless-steel-kitchen-containers/stainless-steel-kitchen-containers.jpeg",
  },
  {
    name: "Gifts",
    slug: "gifts",
    shortDescription: "Gift and shopping bag options for festive and return-gift enquiries.",
    image: "/products/gifts/raksha-bandhan-gift-bags/raksha-bandhan-gift-bag-1.jpeg",
  },
] as const satisfies readonly Category[];
