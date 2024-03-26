import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { PagIndex } from '../pages/index'
import { CreateUser } from '../pages/authentication/createUserPage';
import { Login } from '../pages/authentication/loginPage';
import { Home } from '../pages/home';

export function Rotas() {
    return(
        <>
    <BrowserRouter>
        <Routes>
          <Route path='/' Component={PagIndex} />
          <Route path='/create' Component={CreateUser} />
          <Route path='/login' Component={Login}/>
          <Route path='/home' Component={Home}/>
        </Routes>
      </BrowserRouter>
        </>
    )
}