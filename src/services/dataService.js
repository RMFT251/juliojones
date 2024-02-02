let catalog= [

    {
        "title": "secchamps",
        "category":"winners",
        "price":"150",
        "image":"secchamps.jpg",
        "_id":"1",
    },
    {
         "title":"bigsmokey",
         "category":"champions",
         "price":"200",
         "image":"bigsmokey.jpg",
         "_id":"2",
    },
    {
        "title":"bryantdenny",
        "category":"stadium",
        "price":"350",
        "image":"bryantdenny.jpg",
        "_id":"3",
    },
    {
        "title":"juedy",
        "category":"widereciever",
        "price":"299",
        "image":"juedy.jpg",
        "_id":"4"
    },
    {
        "title":"smokey",
        "category":"competition",
        "price":"500",
        "image":"smokey.jpg",
        "_id":"5"
    },
];

class DataService {
    getProducts(){
        return catalog;
    }
}
export default DataService;