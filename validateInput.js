function validateInput(event){
    event.preventDefault();
    let firstName = document.getElementById("fname").value; 
    console.log(firstName);
    let lastName = document.getElementById("lname").value; 
    console.log(lastName);
    let zip = document.getElementById("zip").value; 
    console.log(zip);

    let firstLast = firstName + " " + lastName;
    console.log(firstName); 

    if(firstLast.length < 20){
        alert("Not Enough Characters. First and last name must have at least 20 characters.");
        return;
    }
    console.log("valid first and last name!");

    let parsedZip = parseInt(zip);
    console.log(parsedZip);
    //
    
    if(zip.length != 5 || (!Number.isFinite(parsedZip) )){
       // if(zip.length != 5 || (!Number.isInteger(parsedZip))){
    
        alert("Invalid Zip Code. Zip must be a numbe of 5 digits.");
        return;
    }
    console.log(parseInt("33"));
    

    console.log("Zip Valid!");

}
window.addEventListener("DOMContentLoaded", (event) =>{
    const form = document.getElementById("myForm");
    if(form){
        form.addEventListener("submit", validateInput)
    }
})
