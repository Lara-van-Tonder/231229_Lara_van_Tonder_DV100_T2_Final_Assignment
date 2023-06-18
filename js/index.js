let subOrder = [];

makeSub = () => {

    let subTotal = 0;

    let nameAndSurname = document.getElementById("nameAndSurname").value;
    let email = document.getElementById("email").value;
    let subName = document.getElementById("subName").value;
    let breadOption = document.getElementById("bread").value;

    if(breadOption === "White"){
        subTotal = subTotal + 10;
    } else if(breadOption === "Wholewheat"){
        subTotal = subTotal + 15;
    } else if(breadOption === "Gluten Free"){
        subTotal = subTotal + 20;
    }

    let toppingOptions = document.getElementsByName("toppings");
    let topArray = [];
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            topArray.push(toppingOptions[i].value);
            subTotal = subTotal + + toppingOptions[i].dataset.cost
        }
    }

    let sauceOption = document.getElementById("sauces").value;

    if(sauceOption === "SUPER SUBS SECRET SAUCE (try saying that three times fast)"){
        subTotal = subTotal + 5;
    } else if(sauceOption === "Ketchup"){
        subTotal = subTotal + 5;
    } else if(sauceOption === "Mayonnaise"){
        subTotal = subTotal + 5;
    } else if(sauceOption === "Barbecue"){
        subTotal = subTotal + 5;
    } else if(sauceOption === "1000 Island Dressing"){
        subTotal = subTotal + 5;
    }



    subOrder.push({
        nameAndSurname: nameAndSurname,
        email: email,
        subName: subName,
        breadOption: breadOption,
        toppingOptions: topArray,
        sauceOption: sauceOption,
        subPrice: subTotal
    });

    document.getElementById("realTimeCost").innerHTML = "R0.00"
    document.getElementById("buildASub").reset();
}





realTimeCost = () => {

    realTimePrice = 0;

    let breadOption = document.getElementById("bread").value;
    if(breadOption === "White"){
        realTimePrice = realTimePrice + 10;
    } else if(breadOption === "Wholewheat"){
        realTimePrice = realTimePrice + 15;
    } else if(breadOption === "Gluten Free"){
        realTimePrice = realTimePrice + 20;
    }

    let toppingOptions = document.getElementsByName("toppings");
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            realTimePrice = realTimePrice + +toppingOptions[i].dataset.cost
        }
    }

    let sauceOption = document.getElementById("sauces").value;
    if(sauceOption === "SUPER SUBS SECRET SAUCE (try saying that three times fast)"){
        realTimePrice = realTimePrice + 5;
    } else if(sauceOption === "Ketchup"){
        realTimePrice = realTimePrice + 5;
    } else if(sauceOption === "Mayonnaise"){
        realTimePrice = realTimePrice + 5;
    } else if(sauceOption === "Barbecue"){
        realTimePrice = realTimePrice + 5;
    } else if(sauceOption === "1000 Island Dressing"){
        realTimePrice = realTimePrice + 5;
    }

    document.getElementById("realTimeCost").innerHTML = "R" + realTimePrice + ".00"
}





displayOrder = () => {

    let area = document.getElementById("cardOutputs");
    let total = document.getElementById("orderTotal");

    area.innerHTML = "";

    let overallTotal = 0;

    for(let i = 0; i < subOrder.length; i++){

        let clientName = subOrder[i].nameAndSurname;
        let email = subOrder[i].email;
        let name = subOrder[i].subName;
        let bread = subOrder[i].breadOption;
        let toppings = subOrder[i].toppingOptions;
        let sauce = subOrder[i].sauceOption;
        let price =subOrder[i].subPrice;

        overallTotal += price;

        area.innerHTML += `
            <div class="col-3">
                <div class="card">
                    <div class="card-body">
                        <p>NAME: ${clientName}</p>
                        <p>EMAIL: ${email}</p>
                        <p>SUB NAME: ${name}</p>
                        <p>BREAD: ${bread}</p>
                        <p>TOPPINGS: ${toppings.join(', ')}</p>
                        <p>SAUCE: ${sauce}</p>
                        <p>COST: R${price}.00</p>
                    </div>
                </div>
            </div>`

        total.innerHTML = "R" + overallTotal + ".00"
    }
}





checkOut = () => {
    let data = JSON.stringify(subOrder);
    localStorage.setItem('order', data);
    window.location.href = '/pages/checkout.html';
}