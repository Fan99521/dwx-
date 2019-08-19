var inputer1 = parseInt(prompt("请输入第一个数"));
var inputer2 = parseInt(prompt("请输入第二个数"));
var inputer3 = parseInt(prompt("请输入第三个数"));

if(isNaN(inputer1) === false){
    if (isNaN(inputer2) === false){
        if (isNaN(inputer3) === false){
            console.log("前两个相加减第三个数是" + (inputer1 + inputer2 - inputer3));
        }
    }
}