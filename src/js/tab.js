export const tabFunc = () => {
  // 要素取得
  const buttons = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  contents.forEach((content) => {
    content.classList.add("is--active")
  })

  // 処理
  buttons.forEach((button) => {
    // イベント
    button.addEventListener("click", () => {
      // data-num 取得
      let buttonNum = button.dataset.num;

      // クラスを外す
      buttons.forEach((el) => {
        el.classList.remove("is--active");
      });

      // クラス付与
      button.classList.add("is--active");

      if (buttonNum === "all") {
        // 全ての時
        contents.forEach((content) => {
          const contentChildHeight = content;
          // contentChild.
          content.classList.add("is--active");
        });
      } else {
        contents.forEach((content) => {
          content.classList.remove("is--active");
          let contentNum = content.dataset.num;
          if (buttonNum === contentNum) {
            content.classList.add("is--active");
          }
        });
      }
    });
  });
  // クリックイベント取得
  // クリック情報取得
  // 条件分岐
  // 配列取得

  // 出力
};
