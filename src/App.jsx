import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <ProductCard name ="laptop" price = "1000" description ="jdjnjnndjdn. nnkndkn" picture ="https://picsum.photos/200/300?grayscale"/>
      <ProductCard name ="laptop bag" price = "10.00" description ="ghghghs hhshhvvhs hbhbhbhsbhs" picture ="https://picsum.photos/200/300?grayscale"/>
      </>
  )
}

export default App
