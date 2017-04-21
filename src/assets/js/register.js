/**
 * Created by bombvote-zql on 16/8/31.
// */
var validatorRegister;
var Province;         //存放获取定位的省份
var City;             //存放定位城市
var isNeedpassword = true;
$(document).ready(function () {
    $.validator.setDefaults({
        debug: false
    });

    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
    //register Login

    // if (!$.getUrlParam("regcode")) {
    //     location.href = "index.html";
    // };

    var username = $.getUrlParam('username');
      if (username) {
        $('#userName').val(decodeURI(username));
      };

      var mobile = $.getUrlParam('mobile');
      if (mobile) {
        $('#mobile').val(mobile);
      };

      var brandname = $.getUrlParam('brandname');
      if (brandname) {
        $('#brandName').val(decodeURI(brandname));
      };
    //根据ip地址获取现实地址
    function getAdress() {
         $.ajax({
           url:"http://restapi.amap.com/v3/ip",
            dataType:'json',
            data:{"key":configInfo.mapKey},
            type:'POST',
            success:function(response){
                if (response.status == 1) {
                    City = response.city;
                    Province = response.province;
                    console.log(response);
                } else {
                     timer = setTimeout(getAdress,1000);
                }
            }

        });
    }

    getAdress();


    $("#smsCode").change(function(){
        $("#smsCode").removeData("previousValue").valid();
    });


    validatorRegister = $("#registerForm").validate({
        rules: {
            brandName:{
                required:true,
                maxlength:10
            },
            userName:{
                required:true
            },
            smsCode:{
                required:true,
                number:true,
                remote: {                                          //验证用户名是否存在
                    type: "POST",
                    url: configInfo.baseUrl + "OpPublicAPIs/CheckSendSMS",             //servlet
                    data: {
                        "CheckSendSMS": {
                            "mobile": function(){
                                return String($("input[name='mobile']").val());
                            },
                            "regcode": function(){
                                return String($("input[name='smsCode']").val());
                            }
                        }
                    },
                    dataFilter:function(data) {
                        var result =  JSON.parse(data);
                        console.log("yzm:");
                        console.log(result);
                        if (result.status != 1) {
                            return false;
                        } else {
                            return true;
                        }
                    }
                }
            },
            mobile:{
                required:true,
                isMobile:true
            }
            // password:{
            //     required:true,
            //     minlength: 6
            // }
          },
        messages:{
            brandName:{
                required:"请填写品牌名",
                maxlength:"品牌最大字数为10位"
             },
            userName:{
                required:"请填写联系人姓名"
            },
            smsCode:{
                required:"请输入验证码",
                number:"请输入数字",
                remote:"验证码不正确"

            },
            mobile:{
                required:"请输入手机号码",
                isMobile:"请填写正确的手机号码"

            }
            // password:{
            //     required:"请输入密码",
            //     minlength: "密码至少6为字符或数字"
            // }
        },
        focusCleanup:true,  //获取焦点时，移除错误提示
        onkeyup:null,
        focusInvalid: true,
        groups:{
            register:"password smsCode mobile userName brandName"
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

            // if($('#readCheck').is(":checked") == false) {
            //      $('#registerError').html("需要同意服务协议，才可以注册哦");
            //           return ;
            // }
            if (isNeedpassword === true) {
                    var password = $(form[name="password"]).val();
                    if (password.length < 6) {
                      $('#registerError').html("密码至少6位字符或数字");
                      return ;
                    }
            }
            var request;

            var $inputs = $(form).find("input, select, button");
            $inputs.prop("disabled", true);

            var params = {
                    "BrandInfo":{
                        "Mobile":$(form[name="mobile"]).val(),
                        "PassWord":$(form[name="password"]).val()+"",
                        "BrandName":$(form[name="brandName"]).val(),
                        "RegCode": $.getUrlParam("regcode"),
                        "UserName":$(form[name="userName"]).val(),
                        "Province":Province,
                        "City":City
                    }
            };
            console.log(params);
            $('#registerError').html("");
            request = $.ajax({
                url: configInfo.baseUrl + "OpRegBrandApis/NewRegisterBrand",
                type: "post",
                data: params
            });
            //请求成功后调用
            request.done(function (response, textStatus, jqXHR) {
                console.log(response);
                console.log('返回信息');
                console.log(response.result);
                if (response.status == 1) {
                    location.href = response.result.JumpURL;
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


    //倒计时
    var smsTimer= 60;
     var smsDis=$.cookie("smsDis");
     var inter1;
    if (smsTimer <= 0) {
        smsTimer = 60;
    }
    function countDown($obj){

        var time;
        if($obj.attr("id")=="getSmsBtn")
        {
            time=--smsTimer;
            $.cookie("smsTimer",time,{"expires":1});
            if(time<=0){
                clearTimer($obj);
                return;
            }
        }
        $obj.text(time+"秒后重新发送")

    };

    function  clearTimer($obj) {
        smsTimer=60;
        $obj[0].disabled= false;
        clearInterval(inter1);
        $obj.text("短信获取验证码");
        $.cookie("smsDis","");
        $obj.removeClass("selected");
    };

    $("#mobile").change(function(){
        $('#registerError').html("");
    });

    $("#getSmsBtn").click(function(){
        var $this=$(this);
        var mobile = $("input[name='mobile']").val();
        // validatorRegister.form();

        if (mobile.length == 0) {
            $('#registerError').html("请输入手机号码");
            return ;
        }
        $("input[name='smsCode']").val("");
        if (smsDis == "smsDis") {
            $this.addClass("selected");
            $("#getSmsBtn")[0].disabled = 'disabled'
            inter1 = setInterval(function () {
                countDown($("#getSmsBtn"))
            }, 1000);
        } else {
            if (!$this[0].disabled) {
                    $this[0].disabled = 'disabled';
                     $this.addClass("selected");
                    $.cookie("smsDis", "smsDis", {"expires": 1});
                    inter1 = setInterval(function () {
                        countDown($this);
                    }, 1000);
            }
        }


        $.ajax({
           url:configInfo.baseUrl + "OpPublicAPIs/CheckRegBrandMobile/",
            dataType:'json',
            data:{"SendSMS":{"mobile":mobile}},
            type:'POST',
            success:function(response){
              console.info(response);
                if (response.status == 1) {
                  if (response.result.ClosePassword == false) {
                    $("#password").attr("placeholder", '请设置登录密码');
                    $("#password").attr("disabled", false);
                    $("#password").removeClass('invalid');
                    isNeedpassword = true;
                  } else {
                    $("#password").val('');
                    $("#password").attr("placeholder", '该手机已注册，将使用原密码登录');
                    $("#password").attr("disabled", true);
                    $("#password").addClass('invalid');
                    isNeedpassword = false;
                  }

                } else {
                    clearTimer($this);
                }
            },
            error:function(error){
                clearTimer($this);
            }

        });

    });


});
