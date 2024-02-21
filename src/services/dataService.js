let catalog= [

    {
        "title": "SEC Champs",
        "category":"winners",
        "price":150,
        "image":"secchamps.jpg",
        "_id":"1",
    },
    {
         "title":"Big Smokey",
         "category":"champions",
         "price":200,
         "image":"bigsmokey.jpg",
         "_id":"2",
    },
    {
        "title":"Bryant Denny",
        "category":"stadium",
        "price":350,
        "image":"bryantdenny.jpg",
        "_id":"3",
    },
    {
        "title":"Juedy",
        "category":"widereciever",
        "price":299,
        "image":"juedy.jpg",
        "_id":"4"
    },
    {
        "title":"Smokey",
        "category":"competition",
        "price":500,
        "image":"smokey.jpg",
        "_id":"5"
    },
];

class DataService {
    getProducts(){
        return catalog;
    }

    addToCart(prod) {
    // add a product to local storage
    // local storage support string, json
    let cart = this.readCart();
    cart.push(prod);

    const jsonCart = JSON.stringify(cart);
    localStorage.setItem("cart",jsonCart);
    }

    readCart() {
    // reads the cart from local storage
    const jsonCart = localStorage.getItem("cart");
    if(jsonCart){
        return JSON.parse(jsonCart);
    }
    else{
        return []; // empty cart
    }
    }
}
export default DataService;