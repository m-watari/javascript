window.onload = function(){
    // 入力値
    const email = document.getElementById('email');
    // 入力イベント監視
    email.addEventListener('keyup', inputText);
}

//inputチェック
function inputText(e) {

    document.getElementById("mail_error").style.display = "none";
    const email_value = email.value.trim();
    email.value = email_value;

}