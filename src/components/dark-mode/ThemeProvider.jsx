import { ThemeProvider as NextThemeProvider } from 'next-themes'

function ThemeProvider({ children }) {
  return (
    <NextThemeProvider
      attribute="data-bs-theme"  // Bootstrap의 테마 속성
      defaultTheme="system"      // 기본값: 시스템 설정 따라감
      enableSystem={true}        // 시스템 테마 감지 활성화
      disableTransitionOnChange={false}  // 테마 변경 시 부드러운 전환
    >
      {children}
    </NextThemeProvider>
  )
}

export default ThemeProvider