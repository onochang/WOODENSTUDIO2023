$(function () {
    //OS側の設定判定
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const darkMode = darkModeMediaQuery.matches;

    const moon = $(".fa-moon");
    const light = $(".fa-lightbulb");

    // OSの設定がダークモードの場合
    if (darkMode) {
        // OSの設定がダークモードの場合
        $("body").addClass("color-theme-dark");
        light.show();
    } else {
        // OSの設定がライトモードの場合
        console.log("ライトモード");
        moon.show();
    }

    // ダークモード切り替え
    moon.on("click", function () {
        $("body").addClass("color-theme-dark");
        moon.hide();
        light.show();
        // ローカルストレージにダークモードを保存
        localStorage.setItem("dark-mode-settings", "dark");
    });

    light.on("click", function () {
        $("body").removeClass("color-theme-dark");
        light.hide();
        moon.show();
        // ローカルストレージにライトモードを保存
        localStorage.setItem("dark-mode-settings", "light");
    });

    //ローカルストレージ判定
    if (localStorage.getItem("dark-mode-settings") === "dark") {
        // ローカルストレージにダークモードが保存されていたら
        $("body").addClass("color-theme-dark");
        light.show();
        moon.hide();
    } else if (localStorage.getItem("dark-mode-settings") === "light") {
        // ローカルストレージにライトモードが保存されていたら
        $("body").removeClass("color-theme-dark");
        console.log("ライトモード");
        moon.show();
        light.hide();
    }
})