// 这里可以添加一些交互性功能，比如团队成员的图片轮播或弹出详细信息。
// 例如，下面是一个简单的脚本，当用户点击团队成员的名字时，会显示一个包含更多信息的模态框。

document.querySelectorAll('.member h3').forEach(function(member) {
    member.addEventListener('click', function() {
        alert('这里是' + member.textContent + '的详细信息。');
    });
});
