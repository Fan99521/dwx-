var years = parseInt(prompt("请输入一个时间"));
var monthpay = parseInt(prompt("请输入一个月薪"));
var endbonus;

if(years > 0 && years < 1){
    if(monthpay > 8000){
        endbonus = 1.2 * monthpay;
    }else{
        endbonus = monthpay;
    }
}else if(years >= 1 && years < 2){
    if(monthpay > 10000){
        endbonus = 1.7 * monthpay;
    }else{
        endbonus = 1.5 * monthpay;
    }
}else if(years >= 2){
    if(monthpay > 12000){
        endbonus = 3.2 * monthpay;
    }else{
        endbonus = 3 * monthpay;
    }
}
console.log("您的年终奖是" + endbonus + "元");