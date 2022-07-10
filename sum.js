function sum(a, b) {
    return a + b;
  }
module.exports = sum;

// 1から100を表示
for (var i = 1; i <= 100; i++) {
  console.log(i);
}

// アルファベット2文字、数字4文字のID生成
var id = '';
for (var i = 0; i < 2; i++) {
  id += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// 素数判定
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// 素数判定のテストコード
for (var i = 0; i < 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

// urlからリンクを全て取得
var url = '';
var links = [];
var html = '';
var request = require('request');
request(url, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    html = body;
    var $ = cheerio.load(html);
    $('a').each(function(i, elem) {
      links.push($(elem).attr('href'));
    });
    console.log(links);
  }
}
);

// email判定
function isEmail(email) {
  var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(email);
}

// fizzbuzz
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// 全角をすべて半角に変更
function toHankaku(str) {
  return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  });
}

// mysqlに接続
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});
connection.connect();

// ajaxでpost
var request = require('request');
var url = '';
var form = {
  name: 'test',
  age: '20'
};
request.post(url, { form: form }, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
}
);

// 配列からループ表示
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 配列からforEachでループ表示
arr.forEach(function(item) {
  console.log(item);
}
);

const siteData = [
  { name: 'site1', url: 'http://site1.com'},
  { name: 'site2', url: 'http://site2.com' }
]

// siteDataからforEachでnameとurlをループ表示
siteData.forEach(function(item) {
  console.log(item.name);
  console.log(item.url);
}
);

// 配列からループ表示
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
