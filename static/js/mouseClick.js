// ==UserScript==
// @name         鼠标点击冒泡
// @description  一个用JS写的鼠标左击特效
// @description  一些Emoji 😀😃😄😁😆😅😂🤣☺😊😚😙😗😘😍😌😉🙃🙂😇😋😜😝😛🤑🤗🤓😎🤡🤠😖😣☹🙁😕😟😔😞😒😏😫😩😤😠😡😶😐😑😯😦😥😢😨😱😳😵😲😮😧🤤😭😪😴🙄🤔😬🤥🤐💩👺👹👿😈🤕🤒😷🤧🤢👻💀☠👽👾🤖🎃😺😸😹🙏👏🙌👐😾😿🙀😽😼😻
// @author       一碗单炒饭
// @second author LittlePanger
// @description  修改:内容放入数组,按序显示/随机展示
// ==/UserScript==

onload = function() {
  var click_cnt = 0;
  var content = ['富强','民主','文明','和谐','自由','平等','公正','法治','爱国','敬业','诚信','友善','❤'];
  var $html = document.getElementsByTagName("html")[0];
  var $body = document.getElementsByTagName("body")[0];
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  $html.onclick = function(e) {
    var $elem = document.createElement("b");
    $elem.style.color = "#E94F06";
    $elem.style.zIndex = 9999;
    $elem.style.position = "absolute";
    $elem.style.select = "none";
    $elem.style.userSelect = "none";
    var x = e.pageX;
    var y = e.pageY;
    $elem.style.left = (x - 10) + "px";
    $elem.style.top = (y - 20) + "px";
    clearInterval(anim);
    if (click_cnt>content.length-1){
      click_cnt = 0
    }
    $elem.innerText = content[click_cnt];
    // 按序展示
    ++click_cnt;
    // 随机展示
    // click_cnt = getRandomInt(content.length);
    $elem.style.fontSize = Math.random() * 10 + 8 + "px";
    var increase = 0;
    var anim;
    setTimeout(function() {
      anim = setInterval(function() {
        if (++increase == 150) {
          clearInterval(anim);
          $body.removeChild($elem);
        }
        $elem.style.top = y - 20 - increase + "px";
        $elem.style.opacity = (150 - increase) / 120;
      }, 8);
    }, 70);
    $body.appendChild($elem);
  };
};

