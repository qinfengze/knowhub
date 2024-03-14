// 这里可以添加一些交互性功能，比如动态加载更多问题和解答。
// 注意：以下代码仅为示例，实际应用中可以根据需要添加更多功能。

document.querySelectorAll('details').forEach(function(detail) {
    detail.addEventListener('click', function() {
        if (detail.open) {
            detail.style.backgroundColor = 'transparent';
        } else {
            detail.style.backgroundColor = '#f0f0f0';
        }
    });
});
