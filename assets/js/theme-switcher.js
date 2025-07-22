document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.querySelector('.theme-mode-icon');
  
  // 检查本地存储中的主题设置
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  // 根据当前主题设置切换按钮状态
  if (currentTheme === 'dark') {
    themeToggle.checked = true;
    themeIcon.textContent = '☀️';
  } else {
    themeToggle.checked = false;
    themeIcon.textContent = '🌙';
  }
  
  // 主题切换事件
  themeToggle.addEventListener('change', function() {
    if (this.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeIcon.textContent = '☀️';
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      themeIcon.textContent = '🌙';
    }
  });
});
