const data = [
    {
        "id": 1,
        "tag": "Fruit",
        "imageSrc": require("./assets/images/1.jpg"),
        "imageWebpSrc": require("./assets/images/1.webp"),
        "title": "Apple",
        "about": "Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua.",
        "description": "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
        "id": 2,
        "tag": "Vegetables",
        "imageSrc": require("./assets/images/2.jpg"),
        "imageWebpSrc": require("./assets/images/2.webp"),
        "title": "Aubergine",
        "about": "Consetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua.",
        "description": "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametconsetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
        "id": 3,
        "tag": "Fruit",
        "imageSrc": require("./assets/images/3.jpg"),
        "imageWebpSrc": require("./assets/images/3.webp"),
        "title": "Banana",
        "about": "Stet clita kasd gubergrenconsetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua.",
        "description": "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametconsetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
        "id": 4,
        "tag": "Vegetables",
        "imageSrc": require("./assets/images/4.jpg"),
        "imageWebpSrc": require("./assets/images/4.webp"),
        "title": "Broccoli",
        "about": "Dolor sit ametconsetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua.",
        "description": "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametconsetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
        "id": 5,
        "tag": "Meat",
        "imageSrc": require("./assets/images/5.jpg"),
        "imageWebpSrc": require("./assets/images/5.webp"),
        "title": "Chicken",
        "about": "Amet consetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua.",
        "description": "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametconsetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
        "id": 6,
        "tag": "Fruit",
        "imageSrc": require("./assets/images/6.jpg"),
        "imageWebpSrc": require("./assets/images/6.webp"),
        "title": "Orange",
        "about": "Sit consetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua.",
        "description": "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametconsetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
        "id": 7,
        "tag": "Meat",
        "imageSrc": require("./assets/images/7.jpg"),
        "imageWebpSrc": require("./assets/images/7.webp"),
        "title": "Beef",
        "about": "Lorem ipsum dolor sit ametconsetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua.",
        "description": "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametconsetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
        "id": 8,
        "tag": "Vegetables",
        "imageSrc": require("./assets/images/8.jpg"),
        "imageWebpSrc": require("./assets/images/8.webp"),
        "title": "Zucchini",
        "about": "Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua.",
        "description": "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametconsetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet."
    }
];

export default data;