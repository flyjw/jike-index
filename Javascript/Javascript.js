// 左导航隐藏显示
function showSubNav(id) {
    document.getElementById(id).style.display = 'block';
}

function hideSubNav(id) {
    document.getElementById(id).style.display = 'none';
}
// 左导航隐藏显示



// tab切换
var tabs = document.getElementById("tab").getElementsByTagName("li");

var uls = document.getElementById("tab_con").getElementsByTagName("ul");

for (var i = 0; i < tabs.length; i++) {

    tabs[i].onmouseover = function() {
        change(this);
    }

}

function change(obj) {

    for (var i = 0; i < tabs.length; i++)

    {

        if (tabs[i] == obj) {

            tabs[i].className = "fli";

            uls[i].className = "fdiv";

        } else {

            tabs[i].className = "";

            uls[i].className = "";

        }

    }

}
// tab切换
