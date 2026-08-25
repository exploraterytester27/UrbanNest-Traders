import type { Category } from "@/types/catalog";

// Representative fictional catalogue data. Image paths are placeholders for future local assets.
export const categories = [
  {
    name: "Water Bottles",
    slug: "water-bottles",
    shortDescription: "Everyday bottle concepts for daily routines and gifting.",
    image: "/images/categories/water-bottles.jpg",
  },
  {
    name: "Insulated Bottles",
    slug: "insulated-bottles",
    shortDescription: "Refined insulated bottle concepts for on-the-go moments.",
    image: "/images/categories/insulated-bottles.jpg",
  },
  {
    name: "Lunch Boxes",
    slug: "lunch-boxes",
    shortDescription: "Thoughtful lunch box concepts for workdays and school days.",
    image: "/images/categories/lunch-boxes.jpg",
  },
  {
    name: "Travel Bags",
    slug: "travel-bags",
    shortDescription: "Versatile carry concepts for short trips and daily movement.",
    image: "/images/categories/travel-bags.jpg",
  },
  {
    name: "Handbags",
    slug: "handbags",
    shortDescription: "Distinctive handbag concepts with a polished everyday character.",
    image: "/images/categories/handbags.jpg",
  },
  {
    name: "Purses",
    slug: "purses",
    shortDescription: "Compact purse concepts for small essentials and considered gifting.",
    image: "/images/categories/purses.jpg",
  },
  {
    name: "Vanity Boxes",
    slug: "vanity-boxes",
    shortDescription: "Organised vanity box concepts for personal keepsakes and routines.",
    image: "/images/categories/vanity-boxes.jpg",
  },
  {
    name: "Gift Sets / Return Gifts",
    slug: "gift-sets-return-gifts",
    shortDescription: "Curated gift concepts for occasions, celebrations, and thank-yous.",
    image: "/images/categories/gift-sets-return-gifts.jpg",
  },
  {
    name: "Kitchen & Lifestyle Accessories",
    slug: "kitchen-lifestyle-accessories",
    shortDescription: "Useful accessory concepts for considered everyday spaces.",
    image: "/images/categories/kitchen-lifestyle-accessories.jpg",
  },
] as const satisfies readonly Category[];
