import Backendless from "backendless";

export function getInstructions() {
  Backendless.APIServices.CodelessShoppingCartService.getInstructions()
    .then(function (result) {
      log(result.join('\n'));
    })
}

export function addItem() {
  Backendless.APIServices.CodelessShoppingCartService.addItem('mycart', { 'name': 'Milk', 'quantity': 1 })
    .then(function () {
      log('Item added');
    })
}

function getItems() {
  Backendless.APIServices.CodelessShoppingCartService.getItems('mycart')
    .then(function (result) {
      log(JSON.stringify(result));
    })
}

function purchase() {
  Backendless.APIServices.CodelessShoppingCartService.purchase('mycart')
    .then(log('Everything from the cart has been purchased. Check the database.'))
}

function log(message) {
  document.getElementById('output').innerText += message + '\n';
}
