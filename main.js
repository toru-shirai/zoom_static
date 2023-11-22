function AteamdecideButton(){
    const array = ["Y.K","H.S","T.Y","T.I","K.O","R.K","A.H","M.T","J.H","H.O","J.O"]
    decideMain(array)
}
function BteamdecideButton(){
    const array = ["Y.K","H.S","S.N","T.S","K.I","S.S","S.K","T.Y","N.I"]
    decideMain(array)
}


function decideMain(array){
    var newElement = document.createElement("p"); // p要素作成
        //数秒おきにarrayの要素を選択する
        let interval = 50; // 1000ミリ秒 = 1秒
        let index = 0;

        var newContent = document.createTextNode("");

        // let randomDecide = setInterval(function() {
        //     let randomIndex = Math.floor(Math.random() * array.length);

        //     newContent = document.createTextNode(array[randomIndex]); // テキストノードを作成
        //     newElement.appendChild(newContent); // p要素にテキストノードを追加
        //     newElement.setAttribute("id","child-p3"); // p要素にidを設定
        
        //     var parentDiv = document.getElementById("main");
        //     parentDiv.appendChild(newElement);
        // }, interval);
    
        let randomDecide = setInterval(function() {
            let randomIndex = Math.floor(Math.random() * array.length);

            let element = document.getElementById("decided-person");
            element.innerHTML = array[randomIndex];
        }, interval);
        setTimeout(function() {
            clearInterval(randomDecide);
          }, 3000);



    }