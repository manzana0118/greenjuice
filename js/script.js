$(document).ready(function(){
    
    // 펼침 기능
    let link_list = $('.link-list');
    let link_bt = $('.link-bt');
    link_bt.click(function(){
        link_list.stop().slideToggle(300);
    });

    // 위로가기 기능
    let gotop = $('.gotop');
    gotop.click(function(){
        $('html, body').stop().animate({
            scrollTop: 0
        }, 500);
    });

    //위로가기 사라짐 효과 
    $(window).scroll(function(){
        // 스크롤 바가 이동한 거리 체크
        let sc = $(window).scrollTop();
        if(sc >= 50) {
            gotop.addClass('gotop-active');
        } else {
            gotop.removeClass('gotop-active');
        }
    });
});


window.onload = function(){

    // 비주얼 슬라이드
    let sw_visual = new Swiper('.sw-visual', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000,
            disableOninteraction: false,
        },
        pagination: {
            el: '.sw-visual-pg',
            type: 'fraction',
        }
    });

    // 서비스 슬라이드
    let sw_service = new Swiper('.sw-service', {
        slidesPerView: 4,
        slidesPerGroup:4,
        spaceBetween: 0,
        pagination: {
            el: '.sw-service-pg',
            type: 'bullets',
            clickable: true,
        }
    });

    // 베스트 제품 관련 코드
    // 2. 객체 생성자 함수 방식 코드
    // 원형(틀 - 구조 - class)

    function BestGood(_rank, _like, _title, _price, _ml, _image, _link){
        this.rank = _rank;
        this.like = _like;
        this.title = _title;
        this.price = _price;
        this.ml = _ml;
        this.image = _image;
        this.link = _link;
    };

    // 사용자 객체 생성 함수에 값을 전달해서
    // 새로운 변수로 저장한다.

    // 10대 제품
    let good11 = new BestGood(1,false, '매일아침 튼튼플러스','1500원','100ml','images/1-1.jpg','#');
    let good12 = new BestGood(2,false,'아이러브 루테인','2,700원','130ml','images/1-2.jpg','#');
    let good13 = new BestGood(3,false,'당근즙','2,900원','130ml','images/1-3.jpg','#');
    let good14 = new BestGood(4,false,'러브미 케일&셀러리','1,900원','130ml','images/1-4.jpg','#');
    let good15 = new BestGood(5,false,'핸디밀 프로틴 PRO','2,400원','150ml','images/1-5.jpg','#');

    // 20대 제품
    let good21 = new BestGood(1,false,'식물성유산균쌀요거트','2,100원','150ml','images/2-1.jpg','#');
    let good22 = new BestGood(2,false,'러브미 케일&셀러리','1,900원','130ml','images/2-2.jpg','#');
    let good23 = new BestGood(3,false,'식물성유산균 위&캡슐','2,100원','130ml','images/2-3.jpg','#');
    let good24 = new BestGood(4,false,'노니&깔라만시','2,300원','130ml','images/2-4.jpg','#');
    let good25 = new BestGood(5,false,'식물성유산균 오메가&치아씨드','2,100원','130ml','images/2-5.jpg','#');

    // 30대 제품
    let good31 = new BestGood(1,false,'위러브플러스','2,700원','130ml','images/3-1.jpg','#');
    let good32 = new BestGood(2,false,'러브미 케일&셀러리','1,900원','130ml','images/3-2.jpg','#');
    let good33 = new BestGood(3,false,'노니&깔라만시','2,300원','130ml','images/3-3.jpg','#');
    let good34 = new BestGood(4,false,'마시는 새싹','2,200원','130ml','images/3-4.jpg','#');
    let good35 = new BestGood(5,false,'식물성유산균 위&캡슐','2,100원','130ml','images/3-5.jpg','#');

    // 40대 제품
    let good41 = new BestGood(1,false,'위러브플러스','2,700원','130ml','images/4-1.jpg','#');
    let good42 = new BestGood(2,false,'노니&깔라만시','2,300원','130ml','images/4-2.jpg','#');
    let good43 = new BestGood(3,false,'유기명일엽녹즙','2,600원','130ml','images/4-3.jpg','#');
    let good44 = new BestGood(4,false,'데이터없음','0원','0ml','images/no_img.png','#');
    let good45 = new BestGood(5,false,'마시는 새싹','2,200원','130ml','images/4-5.jpg','#');

    // 50대 제품
    let good51 = new BestGood(1,false,'위러브플러스','2,700원','130ml','images/5-1.jpg','#');
    let good52 = new BestGood(2,false,'노니&깔라만시','2,300원','130ml','images/5-2.jpg','#');
    let good53 = new BestGood(3,false,'돌미나리와 민들레','2,600원','130ml','images/5-3.jpg','#');
    let good54 = new BestGood(4,false,'식물성유산균 오메가&치아씨드','2,100원','130ml','images/5-4.jpg','#');
    let good55 = new BestGood(5,false,'유기명일엽녹즙','2,600원','130ml','images/5-5.jpg','#');


    // 1. 객체 리터럴 방식코드
        let good_10 = [good11, good12, good13, good14, good15];
        let good_20 = [good21, good22, good23, good24, good25];
        let good_30 = [good31, good32, good33, good34, good35];
        let good_40 = [good41, good42, good43, good44, good45];
        let good_50 = [good51, good52, good53, good54, good55];
    
    // 3. 코드 구현
    // 3-1. 제품 카테고리 메뉴 저장
    let best_cate = $('.best-cate li a');
    // 3-2. 각 순위 제품 저장
    let best_good = $('.best .good');
    // 배경 박스 (오렌지)
    let best_cate_bg = $('.best-cate-bg');
    let best_cate_bg_pos = [];

    for(let i = 0; i < best_cate.length; i++) {
        let temp = (55 * i) + 70;
        best_cate_bg_pos[i] = temp;
    }

    // 4. 카테고리를 클릭해서 내용을 변경
    $.each(best_cate, function(index, item){
        $(this).click(function(event){
            // a 태그의 href를 막는다.
            event.preventDefault();

            // 같은 번호를 클릭한다면 리턴한다.
            if(best_cate_index == index) {
                return;
            }

            // 실제 내용을 배치합니다.
            showBest(index);
        });
    });

    // 실제 내용을 보여주는 함수
    function showBest(_index) {

        // 현재 보고 있는 번호를 기억한다.
        best_cate_index = _index;

        let base_data;

        // 메뉴의 베경 위치 잡기
        best_cate_bg.css('top', best_cate_bg_pos[_index]);

        // 메뉴 배경 동작 구현 (색상 바꾸기)
        best_cate.removeClass('best-cate-active');
        best_cate.eq(_index).addClass('best-cate-active')

        // 아이콘 바꾸기
        if(_index == 0) {
            best_cate.eq(0).find('i').stop().animate({
                opacity: 0
            }, 150, function(){
                best_cate.eq(0).find('i').addClass('best-10-active');
            }).animate({
                opacity: 1
            }, 150);    
            best_cate.eq(4).find('i').removeClass('best-50-active');

        }else if(_index == 4){
            best_cate.eq(4).find('i').stop().animate({
                opacity: 0
            }, 150, function(){
                best_cate.eq(4).find('i').addClass('best-50-active');
            }).animate({
                opacity: 1
            }, 150);
            best_cate.eq(0).find('i').removeClass('best-10-active'); 

        }else{
            best_cate.eq(0).find('i').removeClass('best-10-active');
            best_cate.eq(4).find('i').removeClass('best-50-active');
        }

        if(_index == 0) {
            base_data = good_10;
        }else if(_index == 1) {
            base_data = good_20;
        }else if(_index == 2) {            
            base_data = good_30;
        }else if(_index == 3) {            
            base_data = good_40;
        }else if(_index == 4) {
            base_data = good_50;
        }

        $.each(best_good, function (index, item) {

            // let good = best_good.eq(index);
            let good = $(this);
            good.find('a').attr('href', base_data[index].link);
            good.find('.good-img').attr('src', base_data[index].image);
            good.find('.good-name').text(base_data[index].title);
            good.find('.good-price > b').text(base_data[index].price);
            good.find('.good-price > em').text('(' + base_data[index].ml + ')');

            // 해당 객체의 like가 false라면 
            // good.find('.good-heart').removeClass('good-heart-active');

            // 해당 객체의 like 가 true 라면
            // good.find('.good-heart').addClass('good-heart-active');

            if(base_data[index].like == true) {
                good.find('.good-heart').addClass('good-heart-active');
            }else{
                good.find('.good-heart').removeClass('good-heart-active');
            }

            // 클릭 할수록 클래스가 중복 적용된다. (쌓인다.)
            // 해결방법
            
            good.find('.good-heart').off('click').on('click', function(event){

                // 클릭을 아래로 전달하는 것을 막는다.
                event.stopPropagation();
                // a href 를 막아준다.
                event.preventDefault(); 

                if(base_data[index].like == false) {                    
                    // 데이터를 읽었는데 false
                    $(this).addClass('good-heart-active');
                    base_data[index].like = true;
                }else{                    
                    // 데이터를 읽었는데 true
                    $(this).removeClass('good-heart-active');
                    base_data[index].like = false;
                };

            });

        });

    };

    // 처음 무조건 기능을 위해서 실행해 준다.
    showBest(1); // 최초로 20대 데이터를 보여준다.
};



