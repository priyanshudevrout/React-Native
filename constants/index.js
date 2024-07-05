export const categories = [
  {
    id: 1,
    name: "Pizza",
    image: require('../assets/images/pizzaIcon.png'),
  },
  {
    id: 2,
    name: "Burger",
    image: require('../assets/images/hamburger.png'),
  },
  {
    id: 3,
    name: "Italian",
    image: require('../assets/images/noodles.png'),
  },
  {
    id: 4,
    name: "Chinese",
    image: require('../assets/images/takeout.png'),
  },
  {
    id: 5,
    name: "Noodles",
    image: require('../assets/images/noodles.png'),
  },
  {
    id: 6,
    name: "Drinks",
    image: require('../assets/images/drinks.png'),
  },
  {
    id: 7,
    name: "Cupcakes",
    image: require('../assets/images/cupcake.png'),
  },
];

export const featured = {
  id: 1,
  title: 'Popular Picks',
  description: 'Selected from this Restaurants',
  restaurants: [
    {
      id: 1,
      name: 'Papa Johns',
      image: require('../assets/images/restaurant5.jpg'), // Adjust path as necessary
      description: "Hot and spicy pizzas",
      lng: 38.2145602,
      lat: -85.5324269,
      address: '434 Second Street',
      stars: 4,
      reviews: '4.4k',
      category: 'Fast Food',
      dishes: [
        {
          id: 1,
          name: 'Pepperoni Pizza',
          price: 12.99,
          description: 'Classic pepperoni pizza',
          image: require('../assets/images/pizza.jpeg'), // Adjust path as necessary
        },
        {
          id: 2,
          name: 'Margherita Pizza',
          price: 10.99,
          description: 'Traditional margherita pizza',
          image: require('../assets/images/pizza.jpeg'), // Adjust path as necessary
        },
        {
          id: 3,
          name: 'Cheezy Garlic Pizza',
          price: 10.00,
          description: 'Cheezy garlic pizza',
          image: require('../assets/images/pizza.jpeg'), // Adjust path as necessary
        },
        {
          id: 4,
          name: 'BBQ Chicken Pizza',
          price: 14.99,
          description: 'BBQ chicken with onions and peppers',
          image: require('../assets/images/pizza.jpeg'), // Adjust path as necessary
        },
        {
          id: 5,
          name: 'Vegetarian Pizza',
          price: 11.99,
          description: 'Fresh vegetables on a thin crust',
          image: require('../assets/images/pizza.jpeg'), // Adjust path as necessary
        },
        // Add more dishes as needed
      ],
    },
    {
      id: 2,
      name: 'Aishae',
      image: require('../assets/images/restaurant3.webp'), // Adjust path as necessary
      description: "Delicious Italian Cuisine",
      lng: 38.1234567,
      lat: -85.9876543,
      address: '123 Main Street',
      stars: 5,
      reviews: '2.7k',
      category: 'Italian',
      dishes: [
        {
          id: 6,
          name: 'Spaghetti Carbonara',
          price: 15.99,
          description: 'Creamy pasta with bacon and cheese',
          image: require('../assets/images/pizzaIcon.png'), // Adjust path as necessary
        },
        {
          id: 7,
          name: 'Lasagna',
          price: 14.99,
          description: 'Layered pasta with meat and sauce',
          image: require('../assets/images/pizzaIcon.png'), // Adjust path as necessary
        },
        {
          id: 8,
          name: 'Ravioli',
          price: 13.99,
          description: 'Stuffed pasta with ricotta and spinach',
          image: require('../assets/images/pizzaIcon.png'), // Adjust path as necessary
        },
        {
          id: 9,
          name: 'Margherita Pizza',
          price: 12.99,
          description: 'Classic margherita pizza with fresh basil',
          image: require('../assets/images/pizzaIcon.png'), // Adjust path as necessary
        },
        {
          id: 10,
          name: 'Tiramisu',
          price: 8.99,
          description: 'Italian coffee-flavored dessert',
          image: require('../assets/images/pizzaIcon.png'), // Adjust path as necessary
        },
        // Add more dishes as needed
      ],
    },
    {
      id: 3,
      name: 'Sushi Express',
      image: require('../assets/images/restaurant2.jpg'), // Adjust path as necessary
      description: "Authentic Japanese Sushi",
      lng: 37.7749295,
      lat: -122.4194155,
      address: '789 Third Avenue',
      stars: 4.5,
      reviews: '3.2k',
      category: 'Japanese',
      dishes: [
        {
          id: 11,
          name: 'California Roll',
          price: 9.99,
          description: 'Crab, avocado, and cucumber roll',
          image: require('../assets/images/pizzaIcon.png'), // Adjust path as necessary
        },
        {
          id: 12,
          name: 'Sashimi Platter',
          price: 18.99,
          description: 'Assorted slices of raw fish',
          image: require('../assets/images/pizzaIcon.png'), // Adjust path as necessary
        },
        {
          id: 13,
          name: 'Tempura Shrimp',
          price: 14.99,
          description: 'Crispy battered shrimp',
          image: require('../assets/images/pizzaIcon.png'), // Adjust path as necessary
        },
        {
          id: 14,
          name: 'Dragon Roll',
          price: 16.99,
          description: 'Eel, avocado, and cucumber roll',
          image: require('../assets/images/pizzaIcon.png'), // Adjust path as necessary
        },
        {
          id: 15,
          name: 'Miso Soup',
          price: 3.99,
          description: 'Traditional Japanese soup',
          image: require('../assets/images/pizzaIcon.png'), // Adjust path as necessary
        },
        // Add more dishes as needed
      ],
    },
    {
      id: 4,
      name: 'Taco House',
      image: require('../assets/images/restaurant4.jpeg'), // Adjust path as necessary
      description: "Authentic Mexican Tacos",
      lng: 34.052235,
      lat: -118.243683,
      address: '567 Fourth Street',
      stars: 4,
      reviews: '2.9k',
      category: 'Mexican',
      dishes: [
        {
          id: 16,
          name: 'Chicken Tacos',
          price: 3.99,
          description: 'Grilled chicken with salsa and cheese',
          image: require('../assets/images/pizzaIcon.png'), // Adjust path as necessary
        },
        {
          id: 17,
          name: 'Beef Burrito',
          price: 9.99,
          description: 'Beef, beans, rice, and cheese wrapped in a tortilla',
          image: require('../assets/images/pizzaIcon.png'), // Adjust path as necessary
        },
        {
          id: 18,
          name: 'Guacamole',
          price: 5.99,
          description: 'Fresh avocado dip with tomatoes and onions',
          image: require('../assets/images/pizzaIcon.png'), // Adjust path as necessary
        },
        {
          id: 19,
          name: 'Churros',
          price: 4.99,
          description: 'Crispy fried dough pastry with cinnamon sugar',
          image: require('../assets/images/pizzaIcon.png'), // Adjust path as necessary
        },
        {
          id: 20,
          name: 'Nachos',
          price: 7.99,
          description: 'Tortilla chips with melted cheese and jalapenos',
          image: require('../assets/images/pizzaIcon.png'), // Adjust path as necessary
        },
        // Add more dishes as needed
      ],
    },
    {
      id: 5,
      name: 'Burger Joint',
      image: require('../assets/images/restaurant1.webp'), // Adjust path as necessary
      description: "Gourmet Burgers and Fries",
      lng: 40.712776,
      lat: -74.005974,
      address: '678 Fifth Avenue',
      stars: 4.5,
      reviews: '3.5k',
      category: 'American',
      dishes: [
        {
          id: 21,
          name: 'Classic Cheeseburger',
          price: 8.99,
          description: 'Beef patty with cheese, lettuce, and tomato',
          image: require('../assets/images/pizzaIcon.png'), // Adjust path as necessary
        },
        {
          id: 22,
          name: 'BBQ Bacon Burger',
          price: 10.99,
          description: 'Beef patty with bacon, BBQ sauce, and onion rings',
          image: require('../assets/images/pizzaIcon.png'), // Adjust path as necessary
        },
        {
          id: 23,
          name: 'Sweet Potato Fries',
          price: 4.99,
          description: 'Crispy sweet potato fries with dipping sauce',
          image: require('../assets/images/pizzaIcon.png'), // Adjust path as necessary
        },
        {
          id: 24,
          name: 'Milkshake',
          price: 5.99,
          description: 'Creamy milkshake with various flavors',
          image: require('../assets/images/pizzaIcon.png'), // Adjust path as necessary
        },
        {
          id: 25,
          name: 'Vegetarian Burger',
          price: 9.99,
          description: 'Plant-based burger with avocado and sprouts',
          image: require('../assets/images/pizzaIcon.png'), // Adjust path as necessary
        },
        // Add more dishes as needed
      ],
    },
    
    // Add more restaurants with dishes as needed
  ],
};
