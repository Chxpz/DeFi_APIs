//This is a example for 1inche.exchange API end points

//return objects
await fetch("https://api.1inch.exchange/v1.1/quote?fromTokenSymbol=ETH&toTokenSymbol=DAI&amount=100000000000000000000&disabledExchangesList=Bancor")
    .then(function(res)
        {return res.json()})
    .then(function(data)
        {console.log(data)}) 

//return objects
await fetch("https://api.1inch.exchange/v1.1/swap?fromTokenSymbol=ETH&toTokenSymbol=DAI&amount=10000000000000000000000000&fromAddress=0xE8C902e5A810c2368c6eFefcb23B52Efc280aFe0&slippage=1&disableEstimate=true")
    .then(function(res)
        {return res.json()})
    .then(function(data)
        {console.log(data)}) 

//return objects        
await fetch("https://api.1inch.exchange/v1.1/swapQuote?fromTokenSymbol=ETH&toTokenSymbol=DAI&amount=10000000000000000000000000&fromAddress=0xE8C902e5A810c2368c6eFefcb23B52Efc280aFe0&slippage=1&disableEstimate=true")
    .then(function(res)
        {return res.json()})
    .then(function(data)
        {console.log(data)})

//return an array        
await fetch("https://api.1inch.exchange/v1.1/tokens")
    .then(function(res)
         {return res.json()})
    .then(function(data)
         {console.log(data)})

//return an array         
await fetch("https://api.1inch.exchange/v1.1/exchanges")
    .then(function(res)
          {return res.json()})
    .then(function(data)
          {console.log(data)})