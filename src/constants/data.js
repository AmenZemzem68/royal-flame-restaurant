import images from "./images";

const pizzas = [
  {
    title: "Margherita",
    price: "$12",
    tags: "Tomato | Mozzarella | Basil",
  },
  {
    title: "Pepperoni",
    price: "$15",
    tags: "Pepperoni | Mozzarella | Tomato sauce",
  },
  {
    title: "Four Cheese",
    price: "$18",
    tags: "Mozzarella | Cheddar | Parmesan | Blue Cheese",
  },
  {
    title: "BBQ Chicken",
    price: "$20",
    tags: "Chicken | BBQ Sauce | Red Onions | Mozzarella",
  },
  {
    title: "Veggie",
    price: "$16",
    tags: "Bell Peppers | Onions | Mushrooms | Olives",
  },
];

const fancyPlates = [
  {
    title: "Lobster Thermidor",
    price: "$40",
    tags: "Lobster | Cream | Mustard | Parmesan",
  },
  {
    title: "Beef Wellington",
    price: "$35",
    tags: "Beef | Puff Pastry | Mushroom Duxelles | Prosciutto",
  },
  {
    title: "Coq au Vin",
    price: "$25",
    tags: "Chicken | Red Wine | Mushrooms | Bacon",
  },
  {
    title: "Rack of Lamb",
    price: "$45",
    tags: "Lamb | Garlic | Rosemary | Red Wine Sauce",
  },
  {
    title: "Seafood Paella",
    price: "$30",
    tags: "Shrimp | Mussels | Squid | Saffron Rice",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Best Culinary Experience",
    subtitle: "Awarded for exceptional food quality and service.",
  },
  {
    imgUrl: images.award01,
    title: "Chef of the Year",
    subtitle: "Recognized for innovation and mastery in culinary arts.",
  },
  {
    imgUrl: images.award05,
    title: "Excellence in Fine Dining",
    subtitle: "Celebrating a refined and luxurious dining experience.",
  },
  {
    imgUrl: images.award03,
    title: "Best Restaurant Design",
    subtitle: "Honored for outstanding and creative interior design.",
  },
];

export default { pizzas, fancyPlates, awards };
