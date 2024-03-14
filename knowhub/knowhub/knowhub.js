// 这里可以添加一些交互性功能，比如验证文件格式或使用AJAX与后端交互。
// 注意：以下代码仅为示例，实际应用中需要后端支持。

document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // 这里可以添加上传文件的逻辑
    alert('文件上传成功！');
});

// 动态生成知识包列表的示例函数
function generateKnowledgeList() {
    // 假设从后端获取了知识包列表数据
    const knowledgeList = [
        { name: '知识包1', url: '#' },
        { name: '知识包2', url: '#' }
    ];

    const listContainer = document.getElementById('knowledge-list');
    knowledgeList.forEach(function(knowledge) {
        const link = document.createElement('a');
        link.href = knowledge.url;
        link.textContent = knowledge.name;
        listContainer.appendChild(link);
    });
}

// 调用函数生成知识包列表
generateKnowledgeList();
