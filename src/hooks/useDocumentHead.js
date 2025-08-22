import { useEffect } from 'react'

export function useDocumentHead({ title, description, keywords }) {
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
  }, [title, description, keywords])
}