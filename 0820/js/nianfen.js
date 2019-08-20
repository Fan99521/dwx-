var yearInput = parseInt(prompt("请输入一个年份"));

if(yearInput % 100 == 0){
    if(yearInput % 400 == 0){
        alert(yearInput + "年是闰年");
    }else{
        alert(yearInput + "年不是闰年")
    }
}else{
    if(yearInput % 4 == 0){
        alert(yearInput + "年是闰年");
    }else{
        alert(yearInput + "年不是闰年");
    }
}