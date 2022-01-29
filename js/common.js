window.addEventListener("load", function() {
    // 登录框的控制
    var loginBtn = document.querySelector("#loginBtn");
    var login = this.document.querySelector(".login");
    var close = document.querySelector(".close")
    close.addEventListener("click", function() {
        login.style.display = "none";
    })
    loginBtn.addEventListener("click", function() {
        login.style.display = "block";
    });
})
$(function() {
    $('.login-img').on('click', function() {
        $('.login-box').show()
        $('.reg-box').hide()
        $(this).hide()
        $('.logon-img').show()
    })
    $('.logon-img').on('click', function() {
            $('.login-box').hide()
            $('.reg-box').show()
            $(this).hide()
            $('.login-img').show()
        })
        //表单验证
    var form = layui.form
    var layer = layui.layer

    form.verify({
            pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
            repwd: function(value) {
                var pwd = $('.reg-box [name=password]').val()
                if (value !== pwd) {
                    return '两次密码不一致';
                }
            }
        })
        //监听注册表单的提交事件
    $('#form-reg').on('submit', function(e) {
        e.preventDefault()
        $.post('http://8.134.123.165:9999/sweep/account/register', { account: $('#form-reg [name=phone]').val(), password: $('#form-reg [name=password]').val() }, function(res) {
            if (res.code !== 0) {
                console.log(res);
                return layer.msg(res.msg)
            }
            layer.msg("注册成功，请登录！")
            $('.login-img').click()
        })
    })
})