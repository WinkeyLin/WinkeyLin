var obj = JSON.parse($response.body); 

obj = {"result":{"result":[{"identity":"000-000-00001","privilege":{"payType":"4","purchaseDate":1632214771760},"privilegeStatus":"activated","canPay":true},{"identity":"000-002-00001","privilege":{"payType":"4","purchaseDate":1632214771760},"privilegeStatus":"Activated","canPay":true}],"code":200}}

$done({body:JSON.stringify(obj)});