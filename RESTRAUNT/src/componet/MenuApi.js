const menuData= [
  {
    id: 1,
    image: "https://www.funfoodfrolic.com/wp-content/uploads/2021/09/Aloo-Pakora-Blog.jpg",
    name: "allu pakoida",
    category: "snacks",
    price: "20₹",
    description:
      "Pakoras are super crisp on the outside because of their deep-fried battered layer, while the insides are tender-soft. The color of a well made pakora is pretty gold, and the taste is savory, spicy, and greasy.  ",
  },

  {
    id: 2,
    image: "https://cholaindiancuisine.com/wp-content/uploads/2021/04/1440x1080-01-02.jpg",
    name: "chola",
    category: "breakfast",
    price: "70₹",
    description:
      " A popular North Indian dish made from chickpeas cooked in a flavorful blend of spices and herbs, offering a hearty and protein-rich option."
  },
  {
    id: 3,
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/09/crispy-corn.jpg.webp",
    name: "corn",
    category: "snacks",
    price: "20₹",
    description:
      " A versatile ingredient that can be served as boiled, roasted, or in dishes like corn salad, corn on the cob, or corn soup, known for its sweet and crunchy kernels."
  },
  {
    id: 4,
    image: "https://somethingscookingwithalpa.com/wp-content/uploads/2018/09/MaggiPakora_Wb.jpg",
    name: "maggie",
    category: "snacks",
    price: "24₹",
    description:
      "Instant noodles loved by many, usually served with a quick and delicious mix of spices and sauces, making it a convenient snack."
  },
  {
    id: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe5VL7A4xNXgSCUAwHP8T5aqkMnuhKXTjrpg&s",
    name: "momo",
    category: "snacks",
    price: "80₹",
    description:
      "A beloved dumpling dish hailing from Tibet, often filled with minced meat or vegetables, served with a dipping sauce like spicy chutney."
  },
  {
    id: 6,
    image: "https://content.jdmagicbox.com/comp/def_content/non-veg-thali-delivery-restaurants/5eefeba336a281d351f2ab8130ea6022-non-veg-thali-delivery-restaurants-1-s29xe.jpg",
    name: "Non-Veg Thali",
    category: "dinner",
    price: "180₹",
    description:
      " A well-rounded Indian meal featuring a variety of non-vegetarian dishes such as curry, meat, rice, bread, and accompaniments."
  },
  {
    id: 7,
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.secondrecipe.com%2Fpav-bhaji%2F&psig=AOvVaw21dpWEs5nXiCcjvgOYyYFI&ust=1712181822675000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCw_NLEpIUDFQAAAAAdAAAAABA-",
    name: "pav bhaji",
    category: "dinner",
    price: "60₹",
    description:
      "A popular Mumbai street food, consisting of spiced mashed vegetables (bhaji) served with soft bread rolls (pav), a delightful combination."
  },
  {
    id: 8,
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Frecipes.net%2Farticles%2Fwhat-makes-the-perfect-pizza%2F&psig=AOvVaw0Muaje602kcyRQrvBi3n7k&ust=1712181957817000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOj0t4XFpIUDFQAAAAAdAAAAABAd",
    name: "Pizza",
    category: "snacks",
    price: "60₹",
    description:
      "An Italian classic now enjoyed worldwide, featuring a thin or thick crust topped with tomato sauce, cheese, and various toppings, baked to perfection."
  },
  {
    id: 9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fnOICwUUAXZo9xQ-gteFFGL4VZaO6L69_Q&s",
    name: "puri",
    category: "breakfast",
    price: "30₹",
    description:
      "A deep-fried bread from India, known for its airy texture, often served with sides like sabzi or as a dessert with sugar and ghee."
  },
  {
    id: 10,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6OYPG1M4PUzQS9YCCnaH8lmUUrkB23ist_Ai1yTS4ag&s",
    name: "rajma rice",
    category: "dinner",
    price: "200₹",
    description:
      " A North Indian favorite, this dish combines kidney beans in a rich tomato-based gravy, often served with steamed rice for a comforting meal."
  },
  {
    id: 11,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhGPetMYrSzhKpzDq9UzhrDd20KD7m9dGQY9bijutcsw&s",
    name: "Roti With Meat",
    category: "dinner",
    price: "220₹",
    description:
      " A traditional Indian meal where flatbreads (roti) are paired with a meat dish, providing a balance of flavors and textures."
  },
  {
    id: 12,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn97pNnL2r88h19C292kddjw805U5qfeWAw0V8nd2viQ&s",
    name: "samaso",
    category: "snacks",
    price: "15₹",
    description:
      "A popular snack worldwide, this deep-fried pastry is typically stuffed with spiced potatoes, peas, and sometimes minced meat."
  },
  {
    id: 13,
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    name: "Italian food",
    category: "desert",
    price: "150₹",
    description:
      "A diverse category of desserts found in various cultures, such as Indian sweets like gulab jamun, rasgulla, or Western options like chocolate cake and ice cream."
  },
  {
    id: 14,
    image: "https://eastindianrecipes.net/wp-content/uploads/2022/09/How-to-Make-North-Indian-Thali-Vegetarian-7-500x500.jpg",
    name: "vegthali",
    category: "lunch",
    price: "150₹",
    description:
      " A complete vegetarian meal that includes a variety of dishes like vegetables, lentils, rice, bread, and condiments, offering a wholesome dining experience."
  },
];

export default  menuData;
