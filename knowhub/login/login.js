document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // 简单的表单验证
        if (usernameInput.value.trim() === '') {
            alert('用户名不能为空！');
            return;
        }

        if (passwordInput.value.trim() === '') {
            alert('密码不能为空！');
            return;
        }

        // 如果验证通过，可以在这里发送数据到服务器进行验证
        // alert('登录成功！');
        // 这里可以添加将数据发送到服务器的代码
        // 示例：sendLoginRequest(usernameInput.value, passwordInput.value);
    });
});

// 示例函数：发送登录请求到服务器
function sendLoginRequest(username, password) {
    // 使用Fetch API或其他方法发送请求到服务器
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('登录成功！');
            // 登录成功后的操作，例如重定向到主页
        } else {
            alert('登录失败：' + data.message);
        }
    })
    .catch(error => {
        console.error('登录请求出错：', error);
        alert('登录请求出错，请稍后再试！');
    });
}
