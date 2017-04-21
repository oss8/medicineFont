/**
 * Created by bombvote-zql on 16/9/1.
 */

var time = 3;
jQuery(document).ready(function(){
    var timer = function() {
        setTimeout(function(){
            time -- ;
            if (time<=0) {

                window.location = "index.html";
            } else  {
                $("#skipTip").html(time+"秒后自动跳转至首页");
                timer();
            }
        }, 1000);

    }

    timer();
    //这里实现延迟3秒跳转
});
