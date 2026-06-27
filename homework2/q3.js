function productDetails(status){
    return new Promise((resolve, reject) => {
        if (status) {
        resolve({
            name : "Lenovo",
            price : 600000,
            availability : "out of stock"
        });

        } else {
            reject("Error occurred!!!")    
        }
    });
}

productDetails(true).then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});