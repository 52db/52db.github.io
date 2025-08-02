// assets/js/theme-toggle.js
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('toggleTheme');
    
    // 检查本地存储中的主题设置
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // 应用初始主题
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    
    // 切换主题函数
    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        
        // 保存到本地存储
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
    
    // 添加点击事件监听器
    themeToggle.addEventListener('click', toggleTheme);
});
