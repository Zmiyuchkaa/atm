/*
- Банк методы:

openAccount(client) - принимает аргументом объект клиента и создает объект кредитной карты, 
привязывая ее к клиенту и банку. 
ВАЖНО! - в одном банке можно открыть только один счет. 
Если клиент делает это повторно, то вывести сообщение

closeAccount(card) - удаляет объект карточки из памяти (и объект карты из массива cards у клиента)
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

// конструктов клиентов
let Client = function(name, cards="any card") {
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

withdraw(card, sum) - принимает аргументами объект банковской карточки и сумму денег, которую нужно снять. 
ВАЖНО! - если сумма больше той, что есть в банкомате, то вывести сообщение. 
Если карточка от другого банка (карта и банкомат привязываются к банку), то вывести сообщение)

add(card, sum) - принимает аргументами объект банковской карточки и сумму денег, которую нужно положить на карту. 
ВАЖНО! - если сумма больше той, что есть в банкомате, то вывести сообщение.

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
let Client2 = Client("Nick Gushchin");

// экземпляры карточек
let Card1 = Card(PrivatBank.accounts[1], 2683, "10156", Client1, PrivatBank);
let Card3 = PrivatBank.openAccount(Client1);
console.log(Card3);

/*
- Client (имя: строка, cards: массив открытых счетов)
методы:

showTotalBalance() - подсчитывает баланс со всех карт и выводит в консоль.
*/