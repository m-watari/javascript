let button = document.getElementById('on');
button.addEventListener('click', buttonClick);

function buttonClick(){
    let l = [1,3,3,5,5,7,7,10,12,12,15];
    let list = delete_duplicate_v2(l);
    console.log(list);
    return list;
}

function delete_duplicate_v2(numbers){
    let i = 0;
    let temp = [numbers[0]];
    let len_num = numbers.length - 1;
    console.log('len_num', len_num)
    
    while (i < len_num){
        console.log(i)
        if (numbers[i] != numbers[i+1]){
            temp.push(numbers[i+1]);
        }
        i += 1
        
    }
    return temp
}