// ボタンとメニューの要素を取得
const toggleButton = document.getElementById("menu-toggle");
const menuList = document.getElementById("menu-list");

// ボタンを押したとき
toggleButton.addEventListener("click", () => {
    if(menuList.style.display === "block") {
        menuList.style.display = "none"; // 非表示
    } else {
        menuList.style.display = "block"; // 表示
    }
});
