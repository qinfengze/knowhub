document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // 简单的表单验证
        if (usernameInput.value.trim() === '') {
            alert('用户名不能为空！');
            return;
        }

        if (emailInput.value.trim() === '') {
            alert('邮箱不能为空！');
            return;
        }

        if (passwordInput.value.trim() === '') {
            alert('密码不能为空！');
            return;
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            alert('两次输入的密码不一致！');
            return;
        }

        // 如果验证通过，可以在这里发送数据到服务器
        alert('注册成功！');
        // 这里可以添加将数据发送到服务器的代码
    });
});
