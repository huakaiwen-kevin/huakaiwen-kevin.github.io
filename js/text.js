var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("当时轻别意中人","山长水远知何处","七月久","相思旧",
        "还乡何必衣锦秀","恬淡时光空自守"," 天高海阔谁与游","惟愿年年花红透"," 不求岁岁数绡头","待到凤鸟归巢后","几人来去几人留"
        ,"酒入豪肠","七分酿成了月光","剩下的三分啸成剑气","绣口一吐就半个盛唐","我女朋友最美丽💗!!!!",
        "一个人至少拥有一个梦想","有一个理由去坚强","心若没有栖息的地方","到哪里都是在流浪"
        
        
        
        );
        var $i = $("<span></span>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")",
            "user-select":"none",
            "font-size":"8px"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
});
