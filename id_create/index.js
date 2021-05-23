
function butotnClick(){
    let createId = getUniqueId();
    console.log(createId);
}

let button = document.getElementById('createId');
button.addEventListener('click', butotnClick);

// strのランダム生成
function getRandomStr(){
  const LENGTH = 2 //生成したい文字列の長さ
  const SOURCE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" //元になる文字
  let result = ''

  for(let i=0; i<LENGTH; i++){
    result += SOURCE[Math.floor(Math.random() * SOURCE.length)];
  }
  
  return result //p9zh1ziw
}

// ID生成
function getCreateId() {
    let str = getRandomStr();
    let createId = str + Math.floor( Math.random() * 999999 )
    return createId
}

// ダブらないID生成
// function getUniqueStr(){
//   let strong = 1000;
//   return (
//     new Date().getTime().toString(16) +
//     Math.floor(strong * Math.random()).toString(16)
//   );
// }

function getUniqueId(){
  // const id = new Date().getTime().toString()  + Math.floor(Math.random() * 6).toString();
  var hashids = new Hashids("this is my salt"),
  id = hashids.encode(1, 2, 3),
  numbers = hashids.decode(id);
  return id;
}