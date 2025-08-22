import { useTheme } from 'next-themes'
import { IconMoon, IconSun, IconDeviceDesktop } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // 클라이언트에서만 렌더링 (SSR 이슈 방지)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // 서버 사이드에서는 빈 div 반환
    return <div className="nav-item" style={{ width: '40px', height: '40px' }} />
  }

  // 토글 시 순서 system -> light -> dark -> system
  const cycleTheme = () => {
    if (theme === 'system') {
      setTheme('light')
    } else if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('system')
    }
  }

  const getIcon = () => {
    if (theme === 'system') {
      return <IconDeviceDesktop size={24} />
    } else if (resolvedTheme === 'dark') {
      return <IconMoon size={24} />
    } else {
      return <IconSun size={24} />
    }
  }

  const getTitle = () => {
    if (theme === 'system') {
      return 'System theme (auto)'
    } else if (resolvedTheme === 'dark') {
      return 'Switch to light mode'
    } else {
      return 'Switch to dark mode'
    }
  }

  return (
    <div className="nav-item">
      <a
        href="#"
        className="nav-link px-0"
        title={getTitle()}
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        onClick={(e) => {
          e.preventDefault()
          cycleTheme()
        }}
      >
        {getIcon()}
      </a>
    </div>
  )
}

export default ThemeToggle