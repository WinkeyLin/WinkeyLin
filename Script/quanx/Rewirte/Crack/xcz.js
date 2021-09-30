var obj = JSON.parse($response.body);

function key() {
    obj[arguments[0]] = arguments[1]
    }

key("lifetimeMembership", "true");
key("membership", "true");

$done({body: JSON.stringify(obj)});