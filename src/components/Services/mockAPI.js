const data = [
    {
        id: 1,
        title: "Ailina",
        description: "Remera manga larga",
        price: 5.600,
        img: "/assets/imagenes/remeratermica1.jpg",
        stock: 15,
    },
    {
        id: 2,
        title: "Jerald",
        description: "Winkless",
        price: 1234,
        img: "/assets/imagenes/remeratermica2.jpg",
        stock: 6,
    },
    {
        id: 3,
        title: "Jonis",
        description: "Remera térmica ultra resistente",
        price: 5000,
        img: "/assets/imagenes/remeratermica3.png",
        stock: 20,
    },
    {
        id: 4,
        title: "Terri",
        description: "Illidge",
        price: 4000,
        img: "/assets/imagenes/remeratermica4.jpg",
        stock: 6,
    },
    {
        id: 5,
        title: "Seamus",
        description: "Mudd",
        price: 9000,
        img: "/assets/imagenes/remeratermica5.png",
        stock: 6,
    },
    {
        id: 6,
        title: "Kameko",
        description: "Castro",
        price: 6500,
        img: "/assets/imagenes/remeratermica6.jpg",
        stock: 6,
    },
    {
        id: 7,
        title: "Rowen",
        description: "Sammes",
        price: 7000,
        img: "/assets/imagenes/remeratermica7.jpg",
        stock: 6,
    },
    {
        id: 8,
        title: "Thorsten",
        description: "Flockhart",
        price: 2500,
        img: "/assets/imagenes/remeratermica8.jpg",
        stock: 6,
    },
    {
        id: 9,
        title: "Niles",
        description: "Mann",
        price: 11000,
        img: "/assets/imagenes/remeratermica9.jpg",
        stock: 6,
    },
    {
        id: 10,
        title: "Pris",
        description: "Wilcher",
        price: 5680,
        img: "/assets/imagenes/remeratermica10.jpg",
        stock: 6,
    },
    {
        id: 11,
        title: "Aylmer",
        description: "Burn",
        price: 8050,
        img: "/assets/imagenes/remeratermica11.jpg",
        stock: 6,
    },
    {
        id: 12,
        title: "Dean",
        description: "Brinicombe",
        price: 8760,
        img: "/assets/imagenes/remeratermica12.jpg",
        stock: 6,
    },
    {
        id: 13,
        title: "Andrea",
        description: "Nairy",
        price: 3570,
        img: "/assets/imagenes/remeratermica13.jpg",
        stock: 6,
    },
    {
        id: 14,
        title: "Konrad",
        description: "Quarrie",
        price: 12000,
        img: "/assets/imagenes/remeratermica14.jpg",
        stock: 6,
    },
    {
        id: 15,
        title: "Alvin",
        description: "Ronci",
        price: 8730,
        img: "/assets/imagenes/remeratermica15.jpg",
        stock: 6,
    }
];

export default function getItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000)
    })
};
export function getItem() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data[2]);
        }, 2000)
    })
};


