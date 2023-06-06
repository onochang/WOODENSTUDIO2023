$(function () {
    const close = $(".fa-xmark");
    const modal = $(".modal");
    const mobileMenu = $(".mobile-menu");
    const overlay = $(".modal-overlay");

    // ハンバーガーメニューが押された時に
    mobileMenu.on("click", function () {
        // modalをフェードインする
        modal.fadeIn(500);
    })

    // 閉じるアイコンが押された時に
    close.on("click", function () {
        // modalをフェードアウトする
        modal.fadeOut(500);
    })

    // オーバーレイを押した時に
    overlay.on("click", function () {
        // modalをフェードアウトする
        modal.fadeOut(500);
    });
})