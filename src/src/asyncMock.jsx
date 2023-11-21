const products = [
    {
        id: '1',
        name: 'Pajaros',
        price: 200,
        category: 'laminas',
        img: 'https://www.quientedice.com.ar/productos/laminas-pajaros-21/#product-gallery',
        stock: 3,
        description: 'Lámina de seda con diseño de pájaros'
    },
    {
        id: '2',
        name: 'Jardinier',
        price: 300,
        category: 'folex',
        img: 'https://lastimoteas.mitiendanube.com/productos/lamina-folex-dorada-015-ki/#product-gallery',
        stock: 3,
        description: 'Folex con diseño de flores'
    },
    {
        id: '3',
        name: 'Pinceles',
        price: 600,
        category: 'pinceles',
        img: 'https://www.artisticamp.com.ar/productos/set-pinceles-artisticos-pintura-sinteticos-x-5-unid/#product-gallery',
        stock: 3,
        description: 'Kit de pinceles'
    }
]

export const getProducts = ()  => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}
                        (parameter); productId: any
export const getProductById=(productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

(parameter); categoryId: any
export const getProductByCategory=(categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 500)
    })
}