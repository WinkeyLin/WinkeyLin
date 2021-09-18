/* 
Author: Winkey
根据网球规则修改而来
https://github.com/pm936/httpcatcher/blob/master/XMind%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE%E8%A7%A3%E9%94%81pro.json

Hostname= www.xmind.cn
[rewrite_local]
https?:\/\/.*\.xmind\..*\/_res\/devices url script-response-body https://raw.githubusercontent.com/WinkeyLin/WinkeyLin/main/Script/quanx/Rewirte/Crack/XMind.js
 */

body = $response.body.replace(/.+/g, '{\"raw_data\": \"DBcBHgojrvPgruIJMfb4KK\/76CmjxSHSp9KipRwOnQUuf+Gt2FncFUzNvxZydUeXEzDZt\/XWEm91lHFYrvT0f2AFap2L4psLI\/34sKU9VLGH7kFsBYlexU\/nifBtosMJqQxL4TU1pjvjl+1uyWsFAeGR42aEnVhQWgvJB5Ovcd0=\", \"license\": {\"status\": \"sub\", \"expireTime\":3070928235000}, \"_code\": 200}');
$done({ body });
