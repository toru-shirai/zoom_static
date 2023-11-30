const start = async function(a, b) {
    const result = await zoomSdk.config({
      version: '0.16',
      capabilities: [
        "setVirtualBackground",
        "getMeetingContext"
      ],
    });;
  }


async function AteamdecideButton(){
    start();

    // configureApp()
    // res = await zoomSdk.connect()
    // res = await zoomSdk.getMeetingContext();
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

    async function setVirtualForeground(){
        var imgdata = await getImageData(image.src);
     
        var myOptions = {
          imageData: imgdata
        };
     
        console.log("setVirtualForeground");
        imageid = await zoomSdk.setVirtualForeground(myOptions)
        .then((r) => {
            console.log("setVirtualForeground", r);
        })
        .catch((e) => {
            console.log("setVirtualForeground", e);
        });
     }