var obj = JSON.parse($response.body);

function key() {
    obj[arguments[0]] = arguments[1]
    }

key("inAppStates", [{"type":"subscription","productId":"com.readdle.ReaddleDocsIPad.subscription.month10_allusers","originalTransactionId":460000990021755,"productName":"subscription","isEligibleForIntroPeriod":false,"subscriptionExpirationDate":"02:39 26/10/2030","subscriptionState":"active","subscriptionAutoRenewStatus":"autoRenewOn","isInGracePeriod":false,"isInBillingRetryPeriod":false,"entitlements":[]}]);

$done({body: JSON.stringify(obj)});});
