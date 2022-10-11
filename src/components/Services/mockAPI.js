const data = [
    {
        id: 1,
        offer: true,
        title: "Ailina",
        description: "Remera Térmica m/larga blanca",
        price: 5.600,
        img: "/assets/imagenes/remeratermica1.jpg",
        stock: 15,
        category: "remeras",
    },
    {
        id: 2,
        offer: true,
        title: "Jerald",
        description: "Remera Térmica m/larga azul",
        price: 1234,
        img: "/assets/imagenes/remeratermica2.jpg",
        stock: 6,
        category: "remeras",
    },
    {
        id: 3,
        offer: true,
        title: "Jonis",
        description: "Remera térmica ultra resistente gris",
        price: 5000,
        img: "/assets/imagenes/remeratermica3.png",
        stock: 0,
        category: "remeras",
    },
    {
        id: 4,
        offer: true,
        title: "Terri",
        description: "Remera Térmica m/larga tipo buzo roja",
        price: 4000,
        img: "/assets/imagenes/remeratermica4.jpg",
        stock: 6,
        category: "remeras",
    },
    {
        id: 5,
        offer: true,
        title: "Seamus",
        description: "Remera Térmica m/larga negra",
        price: 9000,
        img: "/assets/imagenes/remeratermica5.png",
        stock: 6,
        category: "remeras",
    },
    {
        id: 6,
        title: "Kameko",
        description: "Remera Térmica m/larga gris beige",
        price: 6500,
        img: "/assets/imagenes/remeratermica6.jpg",
        stock: 0,
        category: "remeras",
    },
    {
        id: 7,
        title: "Rowen",
        description: "Remera Térmica m/larga salmón",
        price: 7000,
        img: "/assets/imagenes/remeratermica7.jpg",
        stock: 6,
        category: "remeras",
    },
    {
        id: 8,
        title: "Thorsten",
        description: "Pantalon Térmico negro",
        price: 2500,
        img: "/assets/imagenes/remeratermica8.jpg",
        stock: 6,
        category: "pantalones",
    },
    {
        id: 9,
        title: "Niles",
        description: "Pantalon Térmico rojo/bordo",
        price: 11000,
        img: "/assets/imagenes/remeratermica9.jpg",
        stock: 6,
        category: "pantalones",
    },
    {
        id: 10,
        title: "Pris",
        description: "Pantalon Térmico negro",
        price: 5680,
        img: "/assets/imagenes/remeratermica10.jpg",
        stock: 6,
        category: "pantalones",
    },
    {
        id: 11,
        title: "Aylmer",
        description: "Pantalon Térmico tipo calza negro",
        price: 8050,
        img: "/assets/imagenes/remeratermica11.jpg",
        stock: 6,
        category: "pantalones",
    },
    {
        id: 12,
        title: "Dean",
        description: "Pantalon Térmico tipo jogging gris oscuro",
        price: 8760,
        img: "/assets/imagenes/remeratermica12.jpg",
        stock: 6,
        category: "pantalones",
    },
    {
        id: 13,
        title: "Andrea",
        description: "Pantalon Térmico tipo jogging gris claro",
        price: 3570,
        img: "/assets/imagenes/remeratermica13.jpg",
        stock: 6,
        category: "pantalones",
    },
    {
        id: 14,
        title: "Konrad",
        description: "Pantalon Térmico tipo calza negro",
        price: 12000,
        img: "/assets/imagenes/remeratermica14.jpg",
        stock: 0,
        category: "pantalones",
    },
    {
        id: 15,
        title: "Alvin",
        description: "Pantalon Térmico jogging beige",
        price: 8730,
        img: "/assets/imagenes/remeratermica15.jpg",
        stock: 6,
        category: "pantalones",
    }
];

export default function getItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000)
    })
};
export function getItem(idItem) {
    return new Promise((resolve, reject) => {
        let itemFind = data.find((item) => {
            return item.id === parseInt(idItem);
        });
        setTimeout(() => {
            if (itemFind) resolve(itemFind);
            else reject(new Error("item no encontrado"));
        }, 1500)
    })
};

export function getItemsByCategory(id) {
    return new Promise((resolve, reject) => {

        let itemFind = data.filter((item) => {
            return item.category === id;
        });
        setTimeout(() => {
            if (itemFind) resolve(itemFind);
            else reject(new Error("item no encontrado"));
        }, 1500)

    });
}
