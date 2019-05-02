/*
Баги:
- closeAccount(card) - удаляет объект карточки из памяти (и объект карты из массива cards у клиента)
- Client методы: showTotalBalance() - подсчитывает баланс со всех карт и выводит в консоль.
*/

// конструктор банка
let Bank = function(name, accounts) {
  let obj = {
    "name": name,
    "accounts": accounts

  } 

  obj.openAccount = function(Client) {
    if (Client.cards.length > 0) {
      for (i = 0; i <= Client.cards.length; i++) {
      if (Client.cards[i] == Bank.name) {
        alert(`Dear ${Client.name}, you \ncan't open a new card in the same Bank.Sorry.`)
      }
    }
    }
    else {
      this.Card = Object.create(Card1);
      Client.cards.push(obj);
      return this;
    }
  }
  return obj;
}

// конструктор карт
let Card = function(account, balance, pincode, owner, Bank) {
  let obj = {
    "account": account,
    "balance": balance,
    "pincode": pincode,
    "owner": owner,
    "bank": Bank
  }

  obj.transferMoney = function(card, amount) {
    this.Card.balance = this.Card.balance - amount;
    card.balance = card.balance + amount; 
    return this;
  }

  return obj;
}

// конструктор банкомата
let CashMachine = function(Bank, balance) {
  let obj = {
      "bank": Bank,
      "balance": balance
  }
  obj.withdraw = function(Card, sum) {
      if (this.bank !== Card.bank) {
          console.log("Эта карта не может быть принята")
      } else if (this.balance < sum) {
          console.log("Недостаточно средств на счету")
      } else {
          this.balance = this.balance - sum;
          return this;
      }
  }
  obj.add = function(Card, sum) {
      this.balance = this.balance + sum;
      if (sum > this.balance) {
          console.log("Недостаточно средств в банкомате")
      }
      return this;
  }
  obj.changePIN = function(Card, oldPIN, newPIN) {
      if (oldPIN == Card.pincode) {
          Card.pincode = newPIN;
          return this;
      } else(alert("You entered a wrong PIN"))
  }
  return obj;
}

// closeAccount(card) - удаляет объект карточки из памяти (и объект карты из массива cards у клиента)

// конструктов клиентов
let Client = function(name, cards=undefined) {
  let obj = {
    "name": name,
    "cards": []
  }

  // obj.closeAccount = function(card) {
  //   for (i = 0; i < Client.cards.length; i++) {

  // }
  obj.showTotalBalance = function() {
    let total = 0;
    for (i = 0; i < Client.cards.balance.length; i++) {
      console.log("I'm here")
      total += Client.cards[i].balance.length;
      console.log(total);
    }
  }

  return obj
}


let PrivatBank = Bank("PrivatBank", ["USD account", "UAH account", "deposit account", "credit card"]);
let OTPBank = Bank("OTP Bank", ["USD account", "UAH account", "deposit account"]);

let CashMachine1 = CashMachine(PrivatBank, 20000);
let CashMachine2 = CashMachine(OTPBank, 12764);

let Client1 = Client("Elena Rolskaya");
let Client2 = Client("Nick Gushchin");

let Card1 = Card("UAH account", 1567, "10156", Client1, PrivatBank);
console.log(Card1);


PrivatBank.openAccount(Client1);
OTPBank.openAccount(Client1);
console.log(Client1.cards);



