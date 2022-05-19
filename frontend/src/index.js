import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './components/HomeScreen'
import DetailScreen from './components/DetailScreen'
import Loadingpage from './components/Loadingpage'
import CreateEvent from './components/CreateEvents'

import './index.css'
import './bootstrap.min.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Search from './components/Search'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Loadingpage />} />
        <Route path='events' element={<HomeScreen />} />
        <Route path='events/:id' element={<DetailScreen />} />
        <Route path='events/search/:keyword' element={<Search />} />
        <Route path='newevent' element={<CreateEvent />} />

        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>{' '}
            </main>
          }></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)

reportWebVitals()
