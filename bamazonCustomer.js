
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  //username
  user: "root",

  //password
  password: "sql2018",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    //console.log(res);
    selectionPrompt();
  });
}

function selectionPrompt() {

  inquirer.prompt([{

          type: "input",
          name: "inputId",
          message: "Please enter the ID number of the item you would like to buy.",
      },
      {
          type: "input",
          name: "inputNumber",
          message: "How many units of this item would you like to buy?",

      }
  ]).then(function(userPurchase) {

      //connect to database to find stock_quantity in database. If user quantity input is greater than stock, decline purchase.

      connection.query("SELECT * FROM products WHERE item_id=?", userPurchase.inputId, function(err, res) {
          for (var i = 0; i < res.length; i++) {

              if (userPurchase.inputNumber > res[i].stock_quantity) {

                  console.log("===================================================");
                  console.log("Sorry! Insufficient quantity in stock." );
                  console.log("===================================================");
                  afterConnection();

              } else {
                  //list item information for user for confirm prompt
                  console.log("===================================");
                  console.log("Awesome! Sufficient quantity in stock!");
                  console.log("===================================");
                  console.log("You've selected:");
                  console.log("----------------");
                  console.log("Item: " + res[i].product_name);
                  console.log("Price: " + res[i].price);
                  console.log("Quantity: " + userPurchase.inputNumber);
                  console.log("----------------");
                  console.log("Total: " + res[i].price * userPurchase.inputNumber);
                  console.log("===================================");

                  var newStock = (res[i].stock_quantity - userPurchase.inputNumber);
                    var purchaseId = (userPurchase.inputId);
                    //console.log(newStock);
                    confirmPrompt(newStock, purchaseId);

                  }
          }
      });
  });
}

function confirmPrompt(newStock, purchaseId) {

  connection.query("UPDATE products SET ? WHERE ?", [{
      stock_quantity: newStock
  }, {
      item_id: purchaseId
  }], function(err, res) {});

  console.log("=================================");
  console.log("Transaction completed. Thank you.");
  console.log("=================================");
  afterConnection();
}

