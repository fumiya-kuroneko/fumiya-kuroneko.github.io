// slick-slider

$(function () {
  $(".slider")
    // 最初のスライドに"add-animation"のclassを付ける(data-slick-index="0"が最初のスライドを指す)
    .on("init", function () {
      $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
    })
    // 通常のオプション
    .slick({
      autoplay: true, // 自動再生ON
      fade: true, // フェードON
      arrows: false, // 矢印OFF
      speed: 700, // スライド、フェードアニメーションの速度1000ミリ秒
      autoplaySpeed: 8000, // 自動再生速度4000ミリ秒
      dots: true,
      pauseOnFocus: false, // フォーカスで一時停止OFF
      pauseOnHover: false, // マウスホバーで一時停止OFF
    })
    .on({
      // スライドが移動する前に発生するイベント
      beforeChange: function (event, slick, currentSlide, nextSlide) {
        // 表示されているスライドに"add-animation"のclassをつける
        $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
        // あとで"add-animation"のclassを消すための"remove-animation"classを付ける
        $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
      },
      // スライドが移動した後に発生するイベント
      afterChange: function () {
        // 表示していないスライドはアニメーションのclassを外す
        $(".remove-animation", this).removeClass(
          "remove-animation add-animation"
        );
      },
    });
});

// slick-slider-end









// slick

$(document).ready(function () {

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,

    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',

    dots: true,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
  });

  // 初期表示を設定
  $('.slider-title').hide();
  $('.slider-title').eq(0).show();
  $('.slider-text').hide();
  $('.slider-text').eq(0).show();
  $('.slider-text-wrapper').hide(); // すべてのテキストを非表示

  // 最初のテキストを表示
  $('.slider-text-wrapper').eq(0).show();

  // メインカルーセルのスライド変更時の処理
  $('.slider-for').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.slider-title').hide();
    $('.slider-text').hide();
    $('.slider-title').eq(nextSlide).show();
    $('.slider-text').eq(nextSlide).show();

    // 新しいテキストのアニメーションをトリガー
    $('.slider-text-wrapper').hide(); // 一度非表示にしてから
    $('.slider-text-wrapper').eq(nextSlide).fadeIn(1200); // アニメーション付きで表示
  });

  // スライドのクリック時の処理
  $('.slider-for .slick-slide').on('click', function () {
    var index = $(this).data('slick-index');
    $('.slider-title').hide();
    $('.slider-title').eq(index).show();
    $('.slider-text').hide();
    $('.slider-text').eq(index).show();
  });

  // ホバー時のカーソルスタイル変更
  $('.slider-nav img').hover(function () {
    $(this).css('cursor', 'pointer');
    $('.slick-center').css('cursor', 'default');
  }, function () {
    $(this).css('cursor', 'default');
  });

});

// slick-end








// target

document.addEventListener('DOMContentLoaded', () => {
  const targetTrack = document.querySelector('.target-track');

  const handleScroll = () => {
    const scrollY = window.scrollY; // 現在のスクロール位置
    const windowHeight = window.innerHeight; // ビューポートの高さ
    const documentHeight = document.documentElement.scrollHeight; // ドキュメントの高さ

    // スクロール量に応じた最大のスクロール範囲
    const maxScroll = documentHeight - windowHeight;
    
    // スクロール量に対するパーセンテージをより早く変化させる
    const scrollPercent = Math.min((scrollY / maxScroll) * 7.5, 1); // 係数6で調整

    // translateX の値を設定し、より早く画面内に出現するように調整
    const translateX = 100 - (scrollPercent * 100); // 150%で調整

    targetTrack.style.transform = `translate3d(${translateX}%, 0, 0)`;
  };

  // スクロールイベントリスナーを追加
  window.addEventListener('scroll', handleScroll);

  // 初期状態のチェック
  handleScroll();
});

// target-end



// プロフィールアニメーション
document.addEventListener("DOMContentLoaded", () => {
  const animBoxes = document.querySelectorAll(".anim-box.popup");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // ビューポートに入ったときに少し遅延してアニメーション発動
        setTimeout(() => {
          entry.target.classList.add("is-animated");
        }, 500); // 500ミリ秒（0.5秒）の遅延
        observer.unobserve(entry.target); // 1回だけ発動する場合
      }
    });
  });

  animBoxes.forEach((box) => {
    observer.observe(box);
  });
});


// プロフィールアニメーション-end



// copy
function copyText(event, buttonId) {
  // Prevent page transition
  event.preventDefault();

  // Get the specific button element and disable it to prevent multiple clicks
  const buttonElement = document.getElementById(buttonId);
  buttonElement.style.pointerEvents = 'none';  // Disable click

  // Copy the text 'kuroneko'
  const textToCopy = 'kuroneko';
  const tempInput = document.createElement('input');
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  // Get the specific text elements inside the button
  const buttonTextElement = buttonElement.querySelector('.button__description04');
  const clickToCopyText = buttonElement.querySelector('.button__description05');

  // Store original text
  const originalText = buttonTextElement.innerHTML;
  const originalClickText = clickToCopyText.innerHTML;

  // Change text content, apply .copied-text class, and hide 'CLICKでコピー'
  buttonTextElement.innerHTML = 'コピーしました！';
  buttonTextElement.classList.add('copied-text');  // Add .copied-text class
  clickToCopyText.classList.add('hidden');  // Hide 'CLICKでコピー'

  // After 3 seconds, revert the text and 'CLICKでコピー' back to original
  setTimeout(() => {
      buttonTextElement.style.transition = 'opacity 1s ease';
      buttonTextElement.style.opacity = 0;  // Fade out the text

      setTimeout(() => {
          // Restore original text and 'CLICKでコピー'
          buttonTextElement.innerHTML = originalText;
          buttonTextElement.style.opacity = 1;  // Fade in the original text
          buttonTextElement.classList.remove('copied-text');  // Remove .copied-text class
          clickToCopyText.classList.remove('hidden');  // Show 'CLICKでコピー' again

          // Re-enable the button after text is restored
          buttonElement.style.pointerEvents = 'auto';  // Enable click
      }, 1000);  // Wait for fade out to complete before restoring text
  }, 3000);
}
// copy-end







// チェックアラート

$(document).ready(function () {
  let $form = $('#contactForm');
  let $submitButton = $form.find('input[type="submit"]');
  let $privacyCheckbox = $('#privacy-policy'); // プライバシーポリシーのチェックボックス
  let $privacyErrorMsg = $privacyCheckbox.closest('label').next('.invalid-feedback'); // プライバシーポリシーのエラーメッセージ
  let $successMessage = $('.contact-form__success-message'); // 送信完了メッセージ
  let $contactForm = $('.contact-form'); // フォーム全体

  // フォーム送信時の処理
  $form.submit(function (event) {
    event.preventDefault(); // デフォルトの送信動作を防ぐ（サンプル用）

    let isValid = true;

    // 各必須項目を検証
    $form.find('[required]').each(function () {
      let $this = $(this);
      let errorMsg = $this.next('.invalid-feedback'); // エラーメッセージ要素

      if ($this.is(':checkbox') && !$this.prop('checked')) {
        isValid = false;
        $this.addClass('is-invalid');
        errorMsg.show();
      } else if (!$this[0].checkValidity()) {
        isValid = false;
        $this.addClass('is-invalid');
        errorMsg.show();
      } else {
        $this.removeClass('is-invalid');
        errorMsg.hide();
      }
    });

    if (!$privacyCheckbox.prop('checked')) {
      isValid = false;
      $privacyCheckbox.addClass('is-invalid');
      $privacyErrorMsg.show();
    } else {
      $privacyCheckbox.removeClass('is-invalid');
      $privacyErrorMsg.hide();
    }

    if (isValid) {
      // フォーム送信処理（AJAX）
      $.ajax({
        url: $form.attr('action'),
        method: $form.attr('method'),
        data: $form.serialize(),
        success: function () {
          // フォームを非表示
          $contactForm.hide();

          // メッセージを表示
          $successMessage.show().addClass('is-visible');
        },
        error: function () {
          alert('送信に失敗しました。もう一度お試しください。');
        }
      });
    }
  });

  // 送信ボタンがクリックされたときにもバリデーションを実行
  $submitButton.click(function (event) {
    let isValid = true;

    $form.find('[required]').each(function () {
      let $this = $(this);
      let errorMsg = $this.next('.invalid-feedback'); // エラーメッセージ要素

      if ($this.is(':checkbox') && !$this.prop('checked')) {
        isValid = false;
        $this.addClass('is-invalid');
        errorMsg.show();
      } else if (!$this[0].checkValidity()) {
        isValid = false;
        $this.addClass('is-invalid');
        errorMsg.show();
      } else {
        $this.removeClass('is-invalid');
        errorMsg.hide();
      }
    });

    if (!$privacyCheckbox.prop('checked')) {
      isValid = false;
      $privacyCheckbox.addClass('is-invalid');
      $privacyErrorMsg.show();
    } else {
      $privacyCheckbox.removeClass('is-invalid');
      $privacyErrorMsg.hide();
    }

    if (!isValid) {
      event.preventDefault();
    }
  });
});


// チェックアラート-end












// modal

$(document).ready(function () {
  // モーダルを開くためのボタンを取得
  var btnOpenModal1 = $('#openModal1'); // モーダルを開くボタン
  var modal = $('#myModal1'); // モーダル全体
  var body = $('body'); // 背景スクロール制御のためのbody

  // ボタンをクリックした時のイベントリスナーを設定
  btnOpenModal1.on('click', function () {
    if (modal.is(':visible')) {
      // モーダルが表示中ならフェードアウトして閉じる
      modal.fadeOut(300); // フェードアウトアニメーション
      body.removeClass('modal-open'); // 背景スクロールを有効化
    } else {
      // モーダルが非表示ならフェードインして表示
      modal.fadeIn(300); // フェードインアニメーション
      body.addClass('modal-open'); // 背景スクロールを無効化
    }
  });

  // モーダル外をクリックしたときに閉じる
  $(window).on('click', function (event) {
    if ($(event.target).is(modal)) {
      modal.fadeOut(300); // フェードアウトで非表示
      body.removeClass('modal-open'); // 背景スクロールを有効化
    }
  });
});

// modal-end




// loading
document.addEventListener("DOMContentLoaded", function () {
  // ローディング処理が終わるまでの待機時間（サンプルとして2秒後に終了）
  setTimeout(() => {
    const loadingElement = document.querySelector(".loading");
    loadingElement.classList.add("fade-out");

    // フェードアウト後に完全にDOMから削除したい場合
    loadingElement.addEventListener("transitionend", () => {
      loadingElement.remove();
    });
  }, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
  // 4秒後に削除
  setTimeout(() => {
    const loadingElement = document.querySelector(".loading__anime");
    
    // フェードアウトを適用
    loadingElement.classList.add("fade-out");

    // フェードアウト完了後にDOMから削除
    loadingElement.addEventListener("transitionend", () => {
      loadingElement.remove();
    });
  }, 4000); // 4000ms = 4秒
});

// loading-end









