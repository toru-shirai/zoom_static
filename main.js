async function configureApp() {
    const configResponse = await zoomSdk.config({
      version: "0.16",
      popoutSize: {width: 480, height: 360},
      capabilities: ["shareApp"]
    })
 }


async function AteamdecideButton(){
    // res = await zoomSdk.connect()
    // res2 = await zoomSdk.postMessage({ message:"test" })
    // console.log(res)
    // console.log(res2)
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
    
        let randomDecide = setInterval(function() {
            let randomIndex = Math.floor(Math.random() * array.length);

            let element = document.getElementById("decided-person");
            element.innerHTML = array[randomIndex];
        }, interval);
        setTimeout(function() {
            clearInterval(randomDecide);
          }, 3000);



    }