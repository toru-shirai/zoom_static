async function zoomMain() {
    const configResult = await zoomSdk.config({
        version: '0.16',
        capabilities: [
            "shareApp",
        ],
    });

    await zoomSdk.shareApp({ action: "start", withSound: true });
}


zoomMain()


//アコーディオン制御する処理
let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    var panel = acc[i].nextElementSibling;
    panel.style.display = "none";
    acc[i].innerHTML = "▼設定表示";
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
            this.innerHTML = "▼設定表示";
        } else {
            panel.style.display = "block";
            this.innerHTML = "▲設定非表示";
        }
    });
}



function chooseFromArray() {
    let array = JSON.parse(localStorage.getItem("data"));
    let newElement = document.createElement("p"); // p要素作成
    let element = document.getElementById("decided-person");

    //ローカルストレージにデータがない場合
    if (array.length === 0) {
        element.innerHTML = "値を保存してください";
        return
    }

    //数秒おきにarrayの要素を選択する
    let interval = 50; // 1000ミリ秒 = 1秒
    let index = 0;

    let newContent = document.createTextNode("");

    let randomDecide = setInterval(function() {
        let randomIndex = Math.floor(Math.random() * array.length);

        element.innerHTML = array[randomIndex];
    }, interval);
    setTimeout(function() {
        clearInterval(randomDecide);
    }, 2000);

}


// 保存      
function saveData() {
    let input = document.getElementById("input").value;
    let dataArray = input.split("\n");
    //空のデータは保存しない
    dataArray = dataArray.filter(function(el) {
        return el != "";
    });

    localStorage.setItem("data", JSON.stringify(dataArray));
    let message = document.createElement("p");
    message.innerHTML = "保存しました";
    document.body.appendChild(message);
    document.getElementById("input").value = "";
    setTimeout(function() {
        message.remove();
    }, 2000);
}


//保存ﾃﾞｰﾀ表示
function showData() {
    let data = JSON.parse(localStorage.getItem("data"));
    let outputDiv = document.getElementById("show-data");
    outputDiv.innerHTML = "";
    let p = document.createElement("p");
    for (let i = 0; i < data.length; i++) {
        p.innerHTML += data[i] + "<br>";
    }
    outputDiv.appendChild(p);
}