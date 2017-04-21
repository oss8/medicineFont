$(document).ready(function () {
    $.validator.setDefaults({
        debug: false
    });

    validatorRegister = $("#applyForm").validate({
        rules: {
            brandName:{
                required:true
            },
            userName:{
                required:true
            },
            mobile:{
                required:true,
                isMobile:true
            },
            email: {
              required:true,
              email:true
            }

          },
        messages:{
            brandName:{
                required:"请填写品牌名"
             },
            userName:{
                required:"请填写联系人姓名"
            },
            mobile:{
                required:"请输入手机号码",
                isMobile:"请填写正确的手机号码"

            },
            email: {
              required:"请输入邮箱",
              email:"请输入正确的邮箱格式"

            }

        },
        // focusCleanup:true,  //获取焦点时，移除错误提示
        // onkeyup:true,
        groups:{
            register:"brandName userName mobile email"
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

            var $inputs = $(form).find("input, select, button");
            $inputs.prop("disabled", true);

            var params = {
                    "RegInfo":{
                        "mobile":$(form[name="mobile"]).val(),
                        "brandName":$(form[name="brandName"]).val(),
                        "userName":$(form[name="userName"]).val(),
                        "email":$(form[name="email"]).val()
                    }
            };
            console.log(params);
            $('#registerError').html("");
            request = $.ajax({
                url: configInfo.baseUrl + "OpRegBrandApis/AddApplyBrand/",
                type: "post",
                data: params
            });
            //请求成功后调用
            request.done(function (response, textStatus, jqXHR) {
                console.log(response);
                console.log('返回信息');
                console.log(response.result);
                if (response.status == 1) {
                    location.href = "result.html";
                } else if (response.status == 0){
                    $('#registerError').html(response.result);
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
