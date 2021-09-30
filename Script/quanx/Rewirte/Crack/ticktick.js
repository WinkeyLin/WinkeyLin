var obj = JSON.parse($response.body);

function key() {
    obj[arguments[0]] = arguments[1]
    }

key("proEndDate", "2030-11-29T02:00:25.000+0000");
key("needSubscribe", "false");
key("teamUser", "true");
key("activeTeamUser", "true");
key("pro", "true");

$done({body: JSON.stringify(obj)});