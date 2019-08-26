$(function () {
    var k = $(window).height();
    var flag = false;
    $('#fullpage').fullpage({
        navigation: true,
        // navigationPosition: 'left',
        keyboardScrolling: true,
        // 回调函数
        afterLoad: function (anchorLink, index) {
            if(index == 2) {
                $(".search").show().animate({"right": 370}, 1500, "easeOutBack", function () {
                    $(".search-words").animate({"opacity" : 1},500,function () {
                        $(".search").hide();
                        $(".search02-1").show().animate({"height":30, "right" : 250, "bottom" : 452},1000);
                        $(".goods02").show().animate({"height":218},1000);
                        // $(".words-01").hide();
                        $(".words-02").animate({opacity: 1},500);
                    });
                });
            }
        },
        onLeave: function (index, nextIndex, direction) {
            if (index == 2 && nextIndex == 3) {
                $(".shirt02").show().animate({"bottom":-(k - 250), "width": 207,"left" :260},2000, function () {
                    $(".img-01-a").animate({"opacity":1},500,function () {
                        $(".btn-01-a").animate({"opacity":1},500);
                    });
                });
                $(".cover").show();
            }
            if (index == 3 && nextIndex == 4) {
                $(".shirt02").hide();

                $(".t1f").show().animate({"bottom":-((k - 250) + 50), "left":260}, 2000,function () {
                    $(this).hide();
                    $(".car-img").show();
                    $(".car").animate({"left":"150%"},2000,"easeInElastic",function () {
                        $(".note").show();
                        $(".note-img, .words-04-a").animate({"opacity":1},1500);
                    })
                });
            }
            if (index == 4 && nextIndex == 5) {
                $(".hand-05").animate({"bottom":0},1000,function () {
                    $(".mouse-05-a").animate({"opacity":1},1000);
                    $(".t1f-05").show().animate({"bottom":70},2000,function () {
                        $(".order-05").animate({"bottom":390},2000,function () {
                            $(".words-05").addClass("words-05-a move");
                        });
                    });
                });
            }
            if (index == 5 && nextIndex == 6) {
                $(".t1f-05").animate({"bottom": -(k-500),"left": "40%", "width": 65},1500,function () {
                    $(this).hide();
                })
                $(".box-06").animate({"left": "38%"},1500, function () {
                    $(this).animate({"bottom": 40},500, function () {
                        $(this).hide();
                        $(".section6").animate({"backgroundPositionX":"100%"},2500, function () {
                            $(".pop-06").show();
                            $(".boy").animate({"height":305, "bottom":"12%"},1000,function () {
                                $(this).animate({"right": 500},1000,function () {
                                    $(".door").animate({"opacity":1},500,function () {
                                        $(".girl").show().animate({"height":294,"right":350},1000,function () {
                                            $(".pop-07").show();
                                        });
                                    });
                                });
                            });
                        });
                        $(".words-06-a").show().animate({"left":"30%"},1500,"easeInOutElastic");
                    })
                });
            }
            if (index == 6 && nextIndex == 7) {
                setTimeout(function () {
                    $(".star").animate({"width":120},2000,function () {
                        $(".good-07").animate({"opacity":1},500);
                    });
                },2000);
            }
            // $(".beginShopping").mouseenter(function () {
            //     $(".btn-08-a").show();
            // }).mouseleave(function () {
            //     $(".btn-08-a").hide();
            // });
            $(".beginShopping").hover(function () {
                $(".btn-08-a").toggle();
            })
            $(document).mousemove(function (event) {
                var left = event.pageX - $(".hand-08").width()/2;
                var top = event.pageY + 10;
                var minY = k - 449;
                if (top <minY){
                    $(".hand-08").css({"left":left,"top":minY});
                }else {
                    $(".hand-08").css({"left":left,"top":top});
                }
                // $(".hand-08").css({"left":left,"top":top});
            })
            $(".again").click(function (event) {
                $.fn.fullpage.moveTo(1);
                $("img, .move").attr("style","");
            })

        },
    });
});