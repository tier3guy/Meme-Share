const shareBtn = document.getElementById("share");
const nextbtn = document.getElementById("next");
const memeImg = document.getElementById("image");
const popUp = document.getElementById("popUp");
const inputTxt = document.getElementById("input");

var link = "https://meme-api.herokuapp.com/gimme";
var shareLink = "";

newImage(link);


shareBtn.addEventListener("click",() => {

    inputTxt.style.visibility = "visible";
    inputTxt.value = shareLink;
    inputTxt.select();
    document.execCommand('copy');
    inputTxt.style.visibility = "hidden";
    
    popUp.innerHTML = "Link is Copied to your Clipboard";
    popUp.style.visibility = "visible";
    setTimeout(disable,2000);
})


nextbtn.addEventListener("click",() => {
    newImage(link);
})

disable = () => {
    popUp.style.visibility = "hidden";
}

async function newImage(file){
    var responseText = await fetch(file);
    var jsonText = await responseText.text();

    var memeUrl = JSON.parse(jsonText).url;
    shareLink = JSON.stringify(memeUrl);
    shareLink = shareLink.slice(1,shareLink.length -1);
    memeImg.src = memeUrl;
}
