/*
Баги:

- созданные при помощи метода карты не добавляются в массив клиента

- ВАЖНО! - в одном банке можно открыть только один счет. 
Если клиент делает это повторно, то вывести сообщение

- closeAccount(card) - удаляет объект карточки из памяти (и объект карты из массива cards у клиента)

- ругается на обращение к балансу в функции withdraw

- нет проверки условия та ли карта в банкомате банка
*/


// конструктор банка
let Bank = function(name, accounts) {
  let obj = {
    "name": name,
    "accounts": accounts

  } 

  obj.openAccount = function(Client) {
    this.Card = Object.create(Card1);
    this.Client = Client;
    // this.Client.push(obj);
    if (this.Card.Bank == 3) { //                        !!! random условие
      alert(`Dear ${this.Client.name}, you \ncan't open a new card in the same Bank.Sorry.`)
    }
    return this;
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

  return obj;
}


// конструктор банкомата
let CashMachine = function(Bank, balance) {
  let obj = {
    "bank": Bank,
    "balance": balance
  }

  obj.withdraw = function(Card, sum) {
    this.balance = this.balance - sum;
    if (this.balance < sum) {
      console.log("Недостаточно средств на счету")
    } return this;
    // else if (this.CashMachine.Bank !== this.CashMachine.Bank) {
    //   console.log("Эта карта не может быть принята")
    // }
    
  }
    obj.add = function(Card, sum) {
      this.balance = this.balance + sum;
      if (sum >  this.balance) {
        console.log("Недостаточно средств в банкомате")
      } return this;
      
    } 

    return obj;
}

// конструктов клиентов
let Client = function(name, cards=undefined) {
  let obj = {
    "name": name,
    "cards": cards
  }

  return obj
}

// экземпляры банка
let PrivatBank = Bank("PrivatBank", ["USD account", "UAH account", "deposit account", "credit card"]);
let OTPBank = Bank("OTP Bank", ["USD account", "UAH account", "deposit account"]);




/*
- Банкомат методы:





changePIN(card, old PIN, new PIN) - смена пинкода карты. Получает аргументом объект карты, пинкод от карты и 
новый пинкод. Если пинкод карты не совпадает с тем, что был передан в метод, то вывести сообщение
*/



// экземпляры банкомата
let CashMachine1 = CashMachine(PrivatBank, 20000);
let CashMachine2 = CashMachine(OTPBank, 12764);



/*
- Банковская карточка (счет: integer, баланс: float, пинкод: string, владелец: класс Client, банк: класс Bank)
методы:

transferMoney(card, amount) - переводит с одной карты на другую. ВАЖНО! - при переводе деньги с объекта снимаются, 
а в другой объект добавляются.
*/




let Client1 = Client("Elena Rolskaya");

let Card1 = Card(PrivatBank.accounts[1], 2683, "10156", Client1, PrivatBank);
let Client2 = Client("Nick Gushchin");
CashMachine1.withdraw(Card1, 200);
console.log(Card1);

let Card3 = PrivatBank.openAccount(Client1);
console.log(Client1);
console.log(Card1);
console.log(Card3);


/*
- Client (имя: строка, cards: массив открытых счетов)
методы:

showTotalBalance() - подсчитывает баланс со всех карт и выводит в консоль.
*/