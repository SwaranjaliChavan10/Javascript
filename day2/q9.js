class InvalidAge extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidAge";
    }
}
function validate(age){
    if(age < 18) {
        try{
        throw new InvalidAge("Age must be at least 18");
    }catch(error){
        console.log(error.name+" : "+error.message);
    }
}
else{
    console.log("Age is valid"); 
}
} validate(16)