import { useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { useTelegram } from './hooks/useTelegram'
import { Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList/ProductList'
import Form from './components/Form/Form'

function App() {
  const { tg, onToggleButton } = useTelegram()

  useEffect(() => {
    tg.ready()
    document.getElementById('test').innerText = location.href
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="form" element={<Form />} />
      </Routes>
      <p id="test">testing</p>
    </div>
  )
}

export default App
