// For official API documentation: https://faucethub.io/api

"use strict";
const request = require('request'),
      querystring = require('querystring');

class FaucethubAPI {


    /**
     *
     * @param api_key Faucethub API Key
     * @param currency A valid currency acronym
     */
    constructor (api_key, currency = 'BTC') {
        this.api_key = api_key;
        this.currency = currency;
    }

    /**
     * @description The method to send requests
     * @param method The name of the method
     * @param data The data to be sent
     * @param callback The callback
     */
  	static APIRequest(method, data, callback) {
        request.post({
            headers: {'content-type' : 'application/x-www-form-urlencoded'},
            url: 'https://faucethub.io/api/v1/' + method + '?' + querystring.stringify(data)
        }, function(error, response, body){
            if(error) callback({status: 504, message:'Connection error'});
            else callback(body);
        });
    }

    /**
     * @description The method to send coins to an address
     * @param to The coin address you are sending to
     * @param amount The amount to send in satoshi
     * @param referral Set this value to true, 1, or simply leave it blank. Use it to indicate that this payout is a referral earning
     * @param ip_address Include the user's IP address to help contribute to the fight against bots and malicious users
     * @param callback The callback
     */
    send(to, amount, referral, ip_address, callback) {
        FaucethubAPI.APIRequest('send', {
            api_key: this.api_key,
            currency: this.currency,
            to: to,
            amount: amount,
            referral: referral,
            ip_address: ip_address
        }, callback)
    }

    /**
     * @description The method to get the last few payouts you did, up to 10.
     * @param count A value between 1 and 10, defaults to 1
     * @param callback The callback
     */
    getPayouts(count, callback) {
        FaucethubAPI.APIRequest('payouts', {
            api_key: this.api_key,
            count: count
        }, callback)
    }

    /**
     * @description The method to get a list of all the currencies we support on our platform and their status
     * @param callback The callback
     */
    getCurrencies(callback) {
        FaucethubAPI.APIRequest('currencies', {
            api_key: this.api_key
        }, callback)
    }

    /**
     * @description The method to get your account balance in any supported currency
     * @param callback The callback
     */
    getBalance(callback) {
        FaucethubAPI.APIRequest('getbalance', {
            api_key: this.api_key,
            currency: this.currency
        }, callback)
    }

    /**
     * @description The method to check if their currency address belongs to an account
     * @param address The coin address you checking
     * @param callback The callback
     */
    checkAddress(address, callback) {
        FaucethubAPI.APIRequest('checkaddress', {
            api_key: this.api_key,
            currency: this.currency,
            address: address
        }, callback)
    }
}

module.exports = FaucethubAPI;