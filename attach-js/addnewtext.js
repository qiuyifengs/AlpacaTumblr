var btn = document.querySelector(".publish");
var txttitle = document.querySelector(".texttitle");
var txtcontent = document.querySelector(".textcontent");
var ul = document.querySelector(".publishtxt");

function changepic() {
  $("#prompt3").css("display", "none");
  var reads = new FileReader();
  f = document.querySelector("#file").files[0];
  reads.readAsDataURL(f);
  reads.onload = function (e) {
    document.querySelector("#img3").src = this.result;
    $("#img3").css("display", "block");
  };
}

btn.onclick = function () {
  if (txttitle.value == "") {
    alert("请输入标题");
    return false;
  } else if (txtcontent.value == "") {
    alert("请输入内容");
    return false;
  } else {
    // 插入盒子
    var litxtbox = document.createElement("ul");
    ul.insertBefore(litxtbox, ul.children[0]);
    // 插入标题
    var lititle = document.createElement("h3");
    lititle.innerHTML = txttitle.value;
    //插入图片
    var picture = document.createElement("img");
    picture.src = document.querySelector("#img3").src;
    // 插入文字
    var licontent = document.createElement("p");
    licontent.innerHTML = txtcontent.value;
    litxtbox.appendChild(lititle);
    litxtbox.appendChild(picture);
    litxtbox.appendChild(licontent);
    console.log(ul);
    // var title = document.createElement('h4')
    // txtbox.appendChild(title);
    // var content = document.createElement('span');
    // txtbox.appendChild(content);
    litxtbox.style.width = "38.75rem";
    litxtbox.style.minHeight = "350px";
    litxtbox.style.backgroundColr = "#fff";
    litxtbox.style.paddingBottom = "0.8rem";
    litxtbox.style.backgroundColor = "#FFF";
    lititle.style.textAlign = "left";
    lititle.style.textIndent = "1rem";
    lititle.style.margin = "0";
    lititle.style.lineHeight = "2";
    licontent.style.margin = "0";
    licontent.style.lineHeight = "1.5";
    licontent.style.textIndent = "1rem";
    picture.style.width = "38.75rem";
    picture.style.height = "430.78px";
    // 在主页的浏览中添加
  }
};
