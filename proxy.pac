// 我们不想访问的网站域名 
var FILTERS = ["www.baidu.com"];
var PROXY = "PROXY 127.0.0.1:9999";
var DERECT = "DIRECT";

function FindProxyForURL(url, host) {
    function rule_filter(domain) {
        for (var i = 0; i < FILTERS.length; i++) {
            if (domain.search(FILTERS[i]) !== -1) {
                return false;
            }
        }
        return true;
    }

    if (rule_filter(host) === true) {
        return DERECT;
    } else { 
        return PROXY; 
    }
};