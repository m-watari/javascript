function emailCheck(email) {
   if (email === null || email === "undefined" || email === '') return null;
   const reg = /^([\w+-]+(\.[\w+-]+)*|"([\w+-. ()<>\[\]:;@,]|\\[\\"])+")@(([a-zA-Z\d\-]+\.)+[a-zA-Z]+|\[(\d{1,3}(\.\d{1,3}){3}|IPv6:[\da-fA-F]{0,4}(:[\da-fA-F]{0,4}){1,5}(:\d{1,3}(\.\d{1,3}){3}|(:[\da-fA-F]{0,4}){0,2}))\])+$/;
   if (!reg.test(email)) return false;
   //email@より前部分が64文字以下であること
   if (email.split('@')[0].length > 64) return false;
   //email@より後部分が253文字以下であること
   if (email.split('@')[1].length > 253) return false;
   //emailの文字数が254文字以下であること
   if (email.length > 254) return false;
   return true;
}