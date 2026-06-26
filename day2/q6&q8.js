try{
    const pi = 3.14;
    console.log(pi);
     pi = 2.71;
    console.log(pi);
    
    
}catch(error){
    console.log(error.name+" : "+error.message);
}

finally{
    console.log("This block will always execute");
}