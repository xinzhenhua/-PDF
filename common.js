// 处理返回首页链接
document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('homeLink');
    if (homeLink) {
        // 根据当前页面层级设置正确的首页链接
        const isInPagesFolder = window.location.pathname.includes('/pages/');
        homeLink.href = isInPagesFolder ? '../index.html' : '/';
    }
});

// 通用文件上传处理
function handleFileUpload(files, allowedTypes, callback) {
    Array.from(files).forEach(file => {
        if (allowedTypes.includes(file.type)) {
            callback(file);
        } else {
            alert('不支持的文件类型！');
        }
    });
}

// 文件大小格式化
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}