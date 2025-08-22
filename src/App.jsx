import { BrowserRouter as Router } from 'react-router-dom'
import DocumentHead from './components/DocumentHead'
import Header from './components/header-component/Header'
import TopMenu from './components/gnb/TopMenu'
import ThemeProvider from './components/dark-mode/ThemeProvider'
import Layout from './components/layout/Layout'

function App() {

  return (
    <ThemeProvider>
      <Router>
        <DocumentHead 
            title="Tabler React Templet" 
            description="Tabler React Templet - customized by @MakGoon" 
            keywords="Templet, MakGoon, React"
            favicon="/favicon.ico" />
        <div className='page'>
          <Header />
          <TopMenu />
          <Layout />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
