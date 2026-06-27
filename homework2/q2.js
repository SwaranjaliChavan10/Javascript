class Product {
    name;
    productId;
    price;

    constructor(name, productId, price) {
        this.name = name;
        this.productId = productId;
        this.price = price;
    }

    displayInfo(){
        console.log(this.name);
        console.log(this.productId);
        console.log(this.price);
    }
        
    }

    const pro = new Product('Laptop', 101, 50000);
    pro.displayInfo()