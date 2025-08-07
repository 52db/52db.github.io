(function () {
  const selector = document.getElementById('theme-selector')
  const root = document.documentElement
  const saved = localStorage.getItem('theme') || 'light'

  function setTheme(t) {
    root.dataset.theme = t
    localStorage.setItem('theme', t)
    selector.checked = (t === 'dark')
  }

  selector.addEventListener('change', () => {
    setTheme(selector.checked ? 'dark' : 'light')
  })

  // 初始设置
  setTheme(saved)
})()
