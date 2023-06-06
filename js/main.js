$(function () {
    // ページトップボタンを取得
    const topBtn = $(".page-top");
    topBtn.on('click', function () {
        // クリックイベントを確認
        console.log("ボタンが押されました");
        $("body,html").animate({
            scrollTop: 0
        }, 300);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn(500);
        } else {
            topBtn.fadeOut(500);
        }
    });

    // ロゴをクリックしたら画像変更のデモ
    const logo = $(".header__logo");
    logo.on('click', function () {
        $(".colum-second__photo1").attr("src", "./img/photo01.jpg");
    })
});

// ここからGSAPアニメーション
gsap.fromTo(
    ".concept-primary .colum-first",
    1, {
        x: -100,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".concept-primary .colum-first",
            start: "top center",
            markers: false,
        },
    }
);

gsap.fromTo(
    ".concept-primary .colum-second__photo1",
    1, {
        x: 100,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".concept-primary .colum-second__photo1",
            start: "top center",
            markers: false,
        },
        delay: 0.5,
    }
);

gsap.fromTo(
  ".concept-primary .colum-second__photo2",
  1,
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".concept-primary .colum-second__photo1",
      start: "top center",
      markers: false,
    },
    delay: 1,
  }
);

gsap.fromTo(
    ".concept-secondary .colum-first__photo",
    1, {
        x: -100,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".concept-secondary .colum-first__photo",
            start: "top center",
            markers: false,
        },
    }
);

gsap.fromTo(
    ".concept-secondary .concept-article",
    1, {
        x: 100,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".concept-secondary .concept-article",
            start: "top center",
            markers: false,
        },
    }
);

gsap.fromTo(
    "#works .section-head",
    1, {
        y: 100,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: "#works .section-head",
            start: "top center",
            markers: false,
        },
    }
);

gsap.fromTo(
    ".works-link",
    1,
    {
        opacity: 0,
    }, {
        opacity: 1,
        scrollTrigger: {
            trigger: ".works-link",
            start: "top center",
            markers: false,
        },
        stagger: {
            each: 0.1
        },
        delay: 0.5,
    }
);

gsap.fromTo(
  "#news .section-head",
  1,
    {
      x: -100,
    opacity: 0,
  },
    {
      x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: "#news .section-head",
      start: "top center",
      markers: false,
    }
  }
);

let mm = gsap.matchMedia();

mm.add("(min-width: 1025px)", () => {
  gsap.fromTo(
    ".news-article",
    1,
    {
      y: -100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".news-article",
        start: "top center",
        markers: false,
        },
        stagger: {
          each: 0.2
      }
    }
  );
});

gsap.fromTo(
  "#show-room .section-head",
  1,
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: "#show-room .section-head",
      start: "top center",
      markers: false,
    },
  }
);

gsap.fromTo(
  ".room-article",
  1,
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      trigger: ".room-article",
      start: "top center",
      markers: false,
      },
      stagger: {
        each: 0.2
    }
  }
);


