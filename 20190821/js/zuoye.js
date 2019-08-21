//1~1000中能被5和6整除的数
for(var s = 1; s <= 1000; s++){
    if(s % 5 == 0){
        console.log(s + "能被5整除");
    }else if(s % 6 == 0){
        console.log(s + "能被6整除的");
    }
}


//第二题 输入一数字n，计算1+2+3+4+......n的和
// var inputNumber = parseInt(prompt("请输入一个正整数"));
// if (isNaN(inputNumber) === true) {
//     alert("输入有误");
// } else {
//     var summary = 0;
//     for (var a = 1; a <= inputNumber; a++) {
//         summary += a;
//     }
//     console.log("从1加到" + inputNumber + "的和是" + summary);
// }



//第三题 输入数字n，计算
// var inputNumber = parseInt(prompt("请输入一个正整数"));
// if (isNaN(inputNumber) === true) {
//     alert("输入有误");
// } else {
//     var summary = 0;
//     for (var a = 2; a <= inputNumber; a++) {
//         summary += (a + 1) / a;
//     }
//     console.log("从3/2到" + a + "/" + (a - 1) + "的和是" + summary);
// }



//第四题 输入数字，在控制台列出它的所有约数
// var userInput = parseInt(prompt("请输入一个正整数"));
// for (var m = 1; m <= userInput; m++) {
//     if (userInput % m == 0) {
//         console.log(m + "是" + userInput + "的约数");
//     }
// }



//第五题 在控制台输出1~60之间的“安全数”
// for (var n = 1; n <= 60; n++) {
//     if (n % 7 != 0 && n % 10 != 7) {
//         console.log(n + "是安全数");
//     }
// }



//第六题 四叶玫瑰数
// for (var m = 1000; m <= 9999; m++) {
//     var ge = m % 10;
//     var shi = parseInt((m % 100) / 10);
//     var bai = parseInt((m % 1000) / 100);
//     var qian = parseInt(m / 1000);
//     var sum = Math.pow(ge, 4) + Math.pow(shi, 4) + Math.pow(bai, 4) + Math.pow(qian, 4);
//     if (m == sum) {
//         console.log(m + "是四叶玫瑰数");
//     }
// }



//第七题 寻找1~10000之间的所有完美数
// for (var m = 1; m <= 10000; m++) {
//     var sum = 0;
//     for (var n = 1; n < m; n++) {
//         if (m % n == 0) {
//             sum += n;
//         }
//     }
//     if (sum == m) {
//         console.log(m + "是完美数");
//     }
// }



//第八题 输入一个数字，判断为质数
// var inputNumber = parseInt(prompt("请输入一个正整数"));
// if (isNaN(inputNumber) === true) {
//     alert("输入有误");
// } else {
//     var count = 0;
//     for (var i = 1; i <= inputNumber; i++) {
//         if (inputNumber % i == 0) {
//             count++;
//         }
//     }
//     if (count == 2) {
//         alert(inputNumber + "是质数");
//     } else {
//         alert(inputNumber + "不是质数");
//     }
// }



//第九题 列出1~10000的所有质数
// var cc = 0;
// for (var i = 2; i <= 10000; i++) {
//     var count = 0;
//     for (var j = 1; j <= i; j++) {
//         if (i % j == 0) {
//             count++;
//         }
//     }
//     if (count == 2) {
//         console.log(i + "是质数");
//         cc++;
//     }
// }
// console.log("1~10000有" + cc + "个质数");



//第十题 苹果3元一个，鸭梨2元一个，桃子1元一个，想用200元买100个水果，在控制台列出所有可能性
    //x表示苹果的个数
    // for (var x = 0; x <= 66; x++) {
    //     //y表示鸭梨的个数
    //     for (var y = 0; y <= 100; y++) {
    //         //z表示桃子的个数
    //         for (var z = 0; z <= 200; z++) {
    //             if (x + y + z == 100 && 3 * x + 2 * y + 1 * z == 200) {
    //                 console.log("苹果买" + x + "个，鸭梨买" + y + "个，桃子买" + z + "个");
    //             }
    //         }
    //     }
    // }