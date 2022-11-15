import { observer } from 'mobx-react-lite'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AllProducts from './Components/AllProducts'
import AppRoutes from './Components/AppRoutes'
import Footer from './Components/Footer'
import Header from './Components/Header'



export const App = observer(() =>{
  
  return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <AppRoutes/>
          {/* <AllProducts/> */}
          <Footer />
        </div>
      </BrowserRouter>
  )
});


