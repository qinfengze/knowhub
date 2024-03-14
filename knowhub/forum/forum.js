function submitPost() {
    var title = document.getElementById('post-title').value;
    var content = document.getElementById('post-content').value;
    if (title && content) {
        var postDiv = document.createElement('div');
        postDiv.innerHTML = '<h3>' + title + '</h3><p>' + content + '</p>';
        document.getElementById('posts').appendChild(postDiv);
        document.getElementById('post-title').value = '';
        document.getElementById('post-content').value = '';
    }
}
