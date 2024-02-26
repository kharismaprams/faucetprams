**FaucethubAPI**
=

Unofficial module for **[Faucethub API](https://faucethub.io/api)**

**Constructor**
```js
    /**
     * @param api_key Faucethub API Key
     * @param currency A valid currency acronym
     */
    constructor (api_key, currency = 'BTC')
```

**send**
```js
    /**
     * @description The method to send coins to an address
     * @param to The coin address you are sending to
     * @param amount The amount to send in satoshi
     * @param referral Set this value to true, 1, or simply leave it blank. Use it to indicate that this payout is a referral earning
     * @param ip_address Include the user's IP address to help contribute to the fight against bots and malicious users
     * @param callback The callback
     */
    public send(to, amount, referral, ip_address, callback)
```
   
   **getPayouts**
```js
    /**
     * @description The method to get the last few payouts you did, up to 10.
     * @param count A value between 1 and 10, defaults to 1
     * @param callback The callback
     */
    public getPayouts(count, callback)
```
   
   **getCurrencies**
```js
    /**
     * @description The method to get a list of all the currencies we support on our platform and their status
     * @param callback The callback
     */
    public getCurrencies(callback)
```

**getBalance**
```js
    /**
     * @description The method to get your account balance in any supported currency
     * @param callback The callback
     */
    public getBalance(callback) 
```

   **checkAddress**
```js
    /**
     * @description The method to check if their currency address belongs to an account
     * @param address The coin address you checking
     * @param callback The callback
     */
    public checkAddress(address, callback)
```

**Example**
```js
    const FaucethubAPI = require('faucethubapi');

	let faucethubapi = new FaucethubAPI('azertyuiopqsdfghjklmwxcvbn', 'DOGE')
	
	// Send 0.5 DOGE
	faucethub.send('DN2G517mi4snqc3eewBRLgdATVCfQwPQ6f', 50000000, false, "", (res) => {
       console.log(res);
    });
   
	