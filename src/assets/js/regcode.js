var validatorRegCode;
var baseUrl = "http://192.168.15.94:4500/api/";
//var regCode;
$(document).ready(function () {
	$.validator.setDefaults({
        debug: false
    });

     $("#regcode").change(function(){
        $("#errorTip").html("");
    });


    validatorRegCode = $("#codeForm").validate({
        rules: {
                regCode:{
                    required:true,
                    number:true
                }
        },
        messages:{
            regCode:{
                required:"请输入内测码",
                number:"请输入数字"
            }
        },

        // focusCleanup:true,
        // highlight: function(element, errorClass, validClass) {
        //     $(element).addClass(errorClass).removeClass(validClass);
        //     $(element).fadeOut().fadeIn();
        // },
        // unhighlight: function(element, errorClass, validClass) {
        //     $(element).removeClass(errorClass).addClass(validClass);
        // },
        groups:{
            regcode:"regCode"
        },
        errorPlacement:function(error,element){
            $("#errorTip").html(error[0].innerHTML);
                        // error.appendTo("#errorTip")
        },

        submitHandler: function (form) {

            console.log(configInfo.baseUrl);
            var request;

            regCode = $(form[name="regCode"]).val();
            var $inputs = $(form).find("input, select, button");
            $inputs.prop("disabled", true);
            request = $.ajax({
                url: configInfo.baseUrl + "OpPublicAPIs/CheckRegCode/",
                type: "post",
                data: {"RegInfo":{"RegCode":$(form[name="regCode"]).val()}}
            });
            //请求成功后调用
            request.done(function (response, textStatus, jqXHR) {
                if (response.status == 1) {
                    location.href = "login.html?regcode=" + regCode;
                } else if (response.status == 0){
                    $('#errorTip').html(response.result);
                }
            });

            //请求失败时调用
            request.fail(function (jqXHR, textStatus, errorThrown) {
                $('#errorTip').html("发生错误");

                console.log("The following error occured: " + textStatus, errorThrown);
            });

            //成功或失败都会回调
            request.always(function () {
                $inputs.prop("disabled", false);
            });

        }
    });


    $("#regCode").change(function(){
        $('#errorTip').html("");
    });

});
