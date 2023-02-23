import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import GlobalStyled from './Global'
import ArticlePage from './components/ArticlePage'
import CreateEditPage from './components/CreateEditPage'
import SearchPage from './components/SearchPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <GlobalStyled />
    <BrowserRouter>

      <Routes>
        <Route path='/' element ={<App />} />
        <Route path='/article/:id' element={<ArticlePage />} />
        <Route path='/create' element={<CreateEditPage />} />
        <Route path='/search/:search' element={<SearchPage /> } />
      </Routes>

    </BrowserRouter>

  </React.StrictMode>,
)
