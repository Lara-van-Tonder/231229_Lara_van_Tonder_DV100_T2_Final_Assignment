displayCheck = () => {

    let data = JSON.parse(localStorage.getItem('order'));
    let items = document.getElementById('checkoutOrder');
    let totalArea = document.getElementById('totalOut');

    let checkTotal = 0;

    for(let i = 0; i < data.length; i++){

        let clientName = data[i].nameAndSurname;
        let email = data[i].email;
        let name = data[i].subName;
        let bread = data[i].breadOption;
        let toppings = data[i].toppingOptions;
        let sauce = data[i].sauceOption;
        let price =data[i].subPrice;

        checkTotal += price;

        items.innerHTML += `
            <div class="orderItems">
                <p>NAME: ${clientName}</p>
                <p>EMAIL: ${email}</p>
                <p>SUB NAME: ${name}</p>
                <p>BREAD: ${bread}</p>
                <p>TOPPINGS: ${toppings.join(', ')}</p>
                <p>SAUCE: ${sauce}</p>
                <p>COST: R${price}.00</p>
            </div>`

        totalArea.innerHTML = "R" + checkTotal + ".00"
    }
}

resetReturn = () => {
    localStorage.removeItem('order');
    window.location.href = '../index.html'
}