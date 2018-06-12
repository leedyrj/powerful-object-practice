// Your job is to create an object that represents a financial advisor and has the following properties and methods.

// Company (enumerable, writable, property)
// Specialty (enumerable, writable, property)
// Name (enumerable, property)
// Portfolio (non-enumerable, property) - Should display the stocks the advisor currently holds
// Worth (non-enumerable, method)
// Purchase (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
// Sell (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
// When sell() or purchase() are invoked, then the stock portfolio should be modified accordingly. Start off with making portfolio property an array that holds transactions.

// When you invoke the worth() method, it should look at every transaction and calculate the advisor's net worth.

const financialAdvisor = Object.create(null, {
    company: {
        value: 'Cool Financial Co.',
        writable: true,
        enumerable: true
    },
    specialty: {
        value: 'Stocks',
        writable: true,
        enumerable: true
    },
    name: {
        value: 'Joe Smith',
        enumerable: true
    },
    portfolio: {
        value: [],
        enumerable: false,
    },
    worth: {
        value: {
            figureWorth: function() {
                let boughtTotal = []
                let soldTotal = []
                for (let key in financialAdvisor.portfolio) {
                    if (financialAdvisor.portfolio[key].purch) {
                        let stocksBought =
                        (financialAdvisor.portfolio[key].cost) * (financialAdvisor.portfolio[key].amount)
                        boughtTotal.push(stocksBought)
                        
                    } else {
                        stocksSold =
                        (financialAdvisor.portfolio[key].cost) * (financialAdvisor.portfolio[key].amount)
                        soldTotal.push(stocksSold)
                    }
                }
                const netWorth = boughtTotal.reduce((currntTotal, next) => currntTotal + next) - soldTotal.reduce((currntTotal, next) => currntTotal + next)
                return netWorth
            }
        },
        enumerable: false
    },
    purchase: {
        value: {
            buy: function(symbol, quantity, price, purch) {
            let bought = Object.create(null, {
                symbol: {
                    value: symbol
                },
                amount: {
                    value: quantity
                },
                cost: {
                    value: price
                },
                purch: {
                    value: true
                }
            })            
            financialAdvisor.portfolio.push(bought)
        },
        enumerable: false
    }
},
sell: {
    value: {
        sell: function(symbol, quantity, price, purch) {
        let sold = Object.create(null, {
            symbol: {
                value: symbol
            },
            amount: {
                value: quantity
            },
            cost: {
                value: price
            },
            purch: {
                value: false
            }
        })        
        financialAdvisor.portfolio.push(sold)
    },
    enumerable: false
}
}
})

financialAdvisor.purchase.buy('AMZ', 10, 20)
financialAdvisor.purchase.buy('GOOG', 30, 30)
financialAdvisor.sell.sell('NVDA', 30, 10)
financialAdvisor.sell.sell('TXN', 50, 5)
financialAdvisor.purchase.buy('MA', 70, 9)
console.log(financialAdvisor.worth.figureWorth());








