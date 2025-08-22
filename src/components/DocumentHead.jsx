import { useEffect } from 'react'

function DocumentHead({ title, description, keywords, favicon }) {
  useEffect(() => {
    
    // 페이지 제목 설정
    if (title) {
      document.title = title
    }

    // 메타 설명 설정
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]')
      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.name = 'description'
        document.head.appendChild(metaDescription)
      }
      metaDescription.content = description
    }

    // 메타 키워드 설정
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.name = 'keywords'
        document.head.appendChild(metaKeywords)
      }
      metaKeywords.content = keywords
    }

    // 파비콘 설정
    if (favicon) {
        let link = document.querySelector('link[rel="icon"]')
        if (!link) {
        link = document.createElement('link')
        link.rel = 'icon'
        link.type = 'image/x-icon'
        document.head.appendChild(link)
        }
        link.href = favicon
    }
  },[title, description, keywords, favicon])

  return null // 이 컴포넌트는 UI를 렌더링하지 않음
}

export default DocumentHead