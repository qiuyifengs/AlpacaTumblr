// 点击 我的账户 图形出现的列表 js代码
var myaccount = document.querySelector(".myaccount");
var myaccountLists = document.querySelector(".myaccount-lists");
myaccount.onmouseover = function () {
  myaccountLists.style.display = "block";
};
myaccountLists.onmouseover = function () {
  myaccountLists.style.display = "block";
};
myaccount.onmouseout = function () {
  myaccountLists.style.display = "none";
};

//点击 铅笔图形 出现的添加新内容
var writepen = document.querySelector(".writepen");
var writeNew = document.querySelector(".write-new");
var flag = 1;
writepen.onclick = function () {
  if (flag == 1) {
    writeNew.style.display = "block";
    flag = 2;
  } else {
    writeNew.style.display = "none";
    flag = 1;
  }
};
