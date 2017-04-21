$(document).ready(function () {
    $.validator.setDefaults({
        debug: false
    });

    var hammer = new Hammer($('#myCarousel'));
      hammer.on('swipeleft', function(){
              $('#myCarousel').carousel('next'); 
              console.log('left');
            })
  		hammer.on('swiperight', function(){
  			$('#myCarousel').carousel('prev'); 
            console.log('right');
  		})
    var validatorRegister = $("#user-form").validate({
        rules: {
  
            userName:{
                required:true
            },
            mobile:{
                required:true,
                isMobile:true
            },
            words: {
              required:true
            }

          },
        messages:{
            userName:{
                required:"三个选项需全部填写"
            },
            mobile:{
                required:"请输入手机号码",
                isMobile:"请填写正确的手机号码"

            },
            words: {
              required:"三个选项需全部填写"

            }

        },
        // // focusCleanup:true,  //获取焦点时，移除错误提示
        // // onkeyup:true,
        groups:{
            register:" userName mobile words"
        },

        errorPlacement:function(error,element){
            $("#registerError").html(error[0].innerHTML);
         
  
        },
        // highlight: function(element, errorClass, validClass) {
        //     // console.log(element.id);
        //     if (element.id == mobile) {
        //         return;
        //     }
        //     $(element).addClass(errorClass).removeClass(validClass);
        //     $(element).fadeOut().fadeIn();
        // },
        // unhighlight: function(element, errorClass, validClass) {
        //      if (element.id == mobile) {
        //         return;
        //     }
        //     $(element).removeClass(errorClass).addClass(validClass);
        // },

        submitHandler: function (form) {

            var request;
            var mobile = $(form[name="mobile"]).val();
            var userName = $(form[name="userName"]).val();
            var words = $(form[name="words"]).val();

            // if(mobile.length == 0 || userName.length == 0 || words.length == 0) {
            //     $('#user-form').popover('show');
            //     return ;
            // }
            var $inputs = $(form).find("input, select, button");
            $inputs.prop("disabled", true);

            
            var params = {
                    "CooperationInfo":{
                        "Mobile":mobile,
                        "Name":userName,
                        "Describe":words
                    }
            };
            $('#registerError').html("");

            request = $.ajax({
                url: configInfo.baseUrl + "OssOWebSiteApis/AddUserCooperation/",
                type: "post",
                data: params
            });
            //请求成功后调用
            request.done(function (response, textStatus, jqXHR) {
                console.log(response);
                console.log('返回信息');
                console.log(response.result);
                if (response.status == 1) {
                    // location.href = "result.html";
                    sweetAlert({
                        title:'success',
                        text: "留言成功，我们会尽快与您联系，谢谢!",
                        showCancelButton: false,
                        confirmButtonColor: "#D0021B",
                        confirmButtonText: "好的",
                        closeOnConfirm: false
                  });
                } else if (response.status == 0){
                    sweetAlert({
                        title:'抱歉',
                        type:'error',
                        text: "不好意思，留言失败了，请重试一次吧，谢谢！",
                        showCancelButton: false,
                        confirmButtonColor: "#D0021B",
                        confirmButtonText: "好的",
                        closeOnConfirm: false
                  });
                } else {
                  sweetAlert({
                        title:'抱歉',
                        type:'error',
                        text: "不好意思，网络请求错误，请重试一次吧，谢谢！",
                        showCancelButton: false,
                        confirmButtonColor: "#D0021B",
                        confirmButtonText: "好的",
                        closeOnConfirm: false
                  });
                }
            });

            //请求失败时调用
            request.fail(function (jqXHR, textStatus, errorThrown) {
                $('#registerError').html(errorThrown);
                console.log("The following error occured: " + textStatus, errorThrown);
            });

            //成功或失败都会回调
            request.always(function () {
                $inputs.prop("disabled", false);
            });
        }
  });

  //增加mobile的验证方法
  $.validator.addMethod("isMobile", function(value, element) {
      var length = value.length;
      var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
      return this.optional(element) || (length == 11 && mobile.test(value));
  }, "请正确填写您的手机号码");



});
