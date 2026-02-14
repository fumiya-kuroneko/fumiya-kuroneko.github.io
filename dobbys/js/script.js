document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".slideshow img");
  let currentImageIndex = 0;

  function showImage(index) {
    images[index].classList.add("active");
    for (let i = 0; i < images.length; i++) {
      if (i !== index) {
        images[i].classList.remove("active");
      }
    }
  }

  function nextImage() {
    showImage(currentImageIndex);
    currentImageIndex = (currentImageIndex + 1) % images.length;
    setTimeout(nextImage, 8000); // 8秒ごとに次の画像を表示
  }

  nextImage();
});

$(document).ready(function () {

  $('.drawer').drawer();
  $('.drawer').click(function () {
    $('body').css('margin-left', '30px');

  });







  document.addEventListener("scroll", function () {
    let header = document.querySelector(".drawer-nav1");
    if (window.innerWidth >= 768) {
      if (window.scrollY >= 660) {
        header.style.opacity = "1";
        header.style.display = "block";
      } else {
        header.style.opacity = "0";
        header.style.display = "none";
      }
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth <= 767) {
      document.querySelector('.drawer-nav1').style.opacity = 0;
      document.querySelector('.drawer-nav1').classList.add('hide');
    } else {
      document.querySelector('.drawer-nav1').style.opacity = '';
      document.querySelector('.drawer-nav1').classList.remove('hide');
    }
  });










  // スムーススクロール

  // #から始まるURLがクリックされた時
  jQuery('a[href^="#"]').click(function () {
    // .headerクラスがついた要素の高さを取得
    let header = jQuery(".header").innerHeight();
    let speed = 300;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    // トップからの距離からヘッダー分の高さを引く
    let position = jQuery(target).offset().top - header - 50;
    // その分だけ移動すればヘッダーと被りません
    jQuery("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });









  // wow
  new WOW().init();

  // google-form
  let $form = $('#js-form')
  $form.submit(function (event) {
    $.ajax({
      url: $form.attr('action'),
      data: $form.serialize(),
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          //送信に成功したときの処理 
          $form.slideUp()
          $('#js-success').slideDown()
        },
        200: function () {
          //送信に失敗したときの処理 
          $form.slideUp()
          $('#js-error').slideDown()
        }
      }
    });
    event.preventDefault();
    // return false; 
  });

  // 必須項目が全て記入されたら送信ボタンの色が変わる
  let $submit = $('#js-submit')
  $('#js-form input, #js-form textarea').on('change', function () {
    if (
      $('#js-form input[type="text"]').val() !== "" &&
      $('#js-form input[type="email"]').val() !== "" &&
      $('#js-form textarea[name="entry.1096707238"]').val() !== "" &&
      $('#js-form input[name="entry.1356989828"]').prop('checked') === true
    ) {
      // 全て入力された時
      $submit.prop('disabled', false)
      $submit.addClass('-active')
    } else {
      // 入力されてない時
      $submit.prop('disabled', true)
      $submit.removeClass('-active')
    }
  });

});


// modal

$(document).ready(function () {
  $('.drawer-price1').click(function () {
    let imageUrl = $(this).attr('src');
    $('.modal-1 .modal-content img').attr('src', imageUrl);
    $('.modal-1').fadeIn(300);
  });
  $('.modal').hide();

  $('.modal-back').click(function () {

    $('.modal-1').fadeOut(300);
  });
});


// slick
$(document).ready(function () {
  $('.modal-flex').slick({
    dots: true,
    arrows: true,
    variableWidth: true,
    lazyLoad: "ondemand",
  });
});







$(function () {
  var slider = $('#js-slider-3');

  slider.on('init', function (event, slick) {
    slider.find('.slick-center').removeClass('small-slide');
    slider.find('.slick-slide').not('.slick-center').addClass('small-slide');
  });

  slider.slick({
    arrows: false,
    dots: false,
    appendDots: $('.dots-3'),
    speed: 1000,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: false, // 無限ループを無効にする
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  });

  // 画像をクリックした際の処理
  slider.find('.slick-slide').on('click', function () {
    var index = $(this).data('slick-index');
    slider.slick('slickGoTo', index);
  });


});




//footerの呼び出し


fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });








document.addEventListener('DOMContentLoaded', function () {
  const button1 = document.querySelector('.staff-btn-click1');
  const profile1 = document.querySelector('.staff-profile1');
  const item2 = document.querySelector('.staff-item-wrapper2');

  let isProfileVisible = false;

  button1.addEventListener('click', () => {
    if (!isProfileVisible) {
      // ゆっくり表示
      profile1.style.transition = 'opacity 0.5s ease-in-out';
      setTimeout(() => {
        profile1.style.opacity = '1';
        profile1.style.zIndex = '2';
        item2.style.zIndex = '0';
      }, 100);
      profile1.style.display = 'flex';
      button1.textContent = 'Back';
    } else {
      // ゆっくり非表示
      profile1.style.transition = 'opacity 0.5s ease-in-out';
      profile1.style.opacity = '0';
      setTimeout(() => {
        profile1.style.zIndex = '0';
      }, 500); // 0.5秒後にz-indexを0に設定
      setTimeout(() => {
        profile1.style.display = 'none';
      }, 500); // 0.5秒後にz-indexを0に設定

      setTimeout(() => {
        item2.style.zIndex = '1';
      }, 500); // 0.5秒後にz-indexを0に設定
      button1.textContent = 'Click';
    }
    isProfileVisible = !isProfileVisible;
  });
});






document.addEventListener('DOMContentLoaded', function () {
  const button2 = document.querySelector('.staff-btn-click2');
  const profile2 = document.querySelector('.staff-profile2');
  const item1 = document.querySelector('.staff-item-wrapper1');

  let isProfileVisible = false;

  button2.addEventListener('click', () => {
    if (!isProfileVisible) {
      // ゆっくり表示
      profile2.style.transition = 'opacity 0.5s ease-in-out';
      setTimeout(() => {
        profile2.style.opacity = '1';
        profile2.style.zIndex = '2';
        item1.style.zIndex = '0';
      }, 100);
      profile2.style.display = 'flex';
      button2.textContent = 'Back';
    } else {
      // ゆっくり非表示
      profile2.style.transition = 'opacity 0.5s ease-in-out';
      profile2.style.opacity = '0';
      setTimeout(() => {
        profile2.style.zIndex = '0';
      }, 500); // 0.5秒後にz-indexを0に設定
      setTimeout(() => {
        profile2.style.display = 'none';
      }, 500); // 0.5秒後にz-indexを0に設定

      setTimeout(() => {
        item1.style.zIndex = '1';
      }, 500); // 0.5秒後にz-indexを0に設定
      button2.textContent = 'Click';
    }
    isProfileVisible = !isProfileVisible;
  });
});



$(document).ready(function () {
  var isHidden = false;

  $('.staff-btn2').click(function () {
    if (isHidden) {
      $('.staff-btn1').removeClass('hidden').animate({
        opacity: 1
      }, 200); // 500ミリ秒かけて表示する
    } else {
      $('.staff-btn1').animate({
        opacity: 0
      }, 200, function () {
        $(this).addClass('hidden');
      }); // 500ミリ秒かけて透明にし、完了後にhiddenクラスを追加
    }
    isHidden = !isHidden;
  });
  $('.staff-btn1').click(function () {
    if (isHidden) {
      $('.staff-btn2').removeClass('hidden').animate({
        opacity: 1
      }, 200); // 500ミリ秒かけて表示する
    } else {
      $('.staff-btn2').animate({
        opacity: 0
      }, 200, function () {
        $(this).addClass('hidden');
      }); // 500ミリ秒かけて透明にし、完了後にhiddenクラスを追加
    }
    isHidden = !isHidden;
  });
});



