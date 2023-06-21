var money = 1000;
var count = Math.floor(money / 5);
var Ping = count;
var Gai = count;

Whatcount();
console.log("还剩" + Ping + "个空瓶");
console.log("还剩" + Gai + "个瓶盖");
console.log(count);

function Whatcount() {
    if (Ping < 3 && Gai < 6) {
        //递归终结条件
        return;
    }
    if (Gai >= 6) {
        var Add1 = Math.floor(Gai / 6);
        count += Add1;
        Gai = Add1 + Gai % 6;//增加的瓶数＋剩余于的瓶盖；
        Ping += Add1;
    }
    if (Ping >= 3) {
        var Add2 = Math.floor(Ping / 3);
        count += Add2;
        Ping = Add2 + Ping % 3; //增加的瓶数＋剩余于空瓶；
        Gai += Add2;
    }
    Whatcount();
}
