var a = parseInt(prompt("请输入一个数"));
 if(a % 5 == 0 && a % 6 == 0){
    alert("能被5，6同时整除的");
 }else if(a % 5 != 0 && a % 6 != 0){
    alert("不能同时被5，6整除的");
 }else if(a % 5 == 0 && a % 6 != 0){
     alert("能被5整出，但不能被6整除的");
 }else if(a % 5 != 0 && a % 6 == 0){
     alert("不能被5整除的，但能被6整除的");
 }