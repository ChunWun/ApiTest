"use strict";
exports.__esModule = true;
exports.IpTrack = void 0;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var IpTrack = /** @class */ (function () {
    function IpTrack() {
        this.POST = 'POST';
        this.baseUrl = 'http://api.ipstack.com/';
        this.accessKey = '?access_key=28ce2aa6bfab1c4eea58014bb7ba15b8';
        this.myIP = '111.235.250.169';
        this.request = new XMLHttpRequest;
    }
    IpTrack.prototype.sentApi = function () {
        this.request.open(this.POST, this.baseUrl + this.myIP + this.accessKey);
        this.request.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var responseJSON = JSON.parse(this.responseText);
                var myResponse = {
                    ip: responseJSON.ip,
                    hostname: responseJSON.hostname,
                    type: responseJSON.type,
                    continent_code: responseJSON.continent_code,
                    continent_name: responseJSON.continent_name,
                    country_code: responseJSON.country_code,
                    country_name: responseJSON.country_name,
                    region_code: responseJSON.region_code,
                    region_name: responseJSON.region_name,
                    city: responseJSON.city,
                    zip: responseJSON.zip,
                    latitude: responseJSON.latitude,
                    longitude: responseJSON.longitude
                };
                console.log(myResponse);
            }
        };
        this.request.send();
    };
    return IpTrack;
}());
exports.IpTrack = IpTrack;
var start = new IpTrack();
start.sentApi();
