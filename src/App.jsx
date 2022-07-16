import logo from './assets/logo.svg';

import './App.css'

function App() {

  return  (
    <>
      <div className='section greetings'>
         <div className='header'>
          <div className='header-logo'>
            <div className='header-logo-icon'>
              <img src={logo} alt="logo" />
            </div>
            <div className='header-logo-name'>CloudBudget</div>
          </div>
          <div className='header-menu'>
            <div className='header-menu-element'>Обзор</div>
            <div className='header-menu-element'>Особенности</div>
            <div className='header-menu-element'>Технологии</div>
            <div className='header-menu-element'>Контакты</div>
            <div className='header-menu-element'>Войти</div>
          </div>
          <div className='header-profile'>
            <div className='btn btn-fill'>
              Вход
            </div>
          </div>
         </div>
      </div>
    </>
  )
}

export default App
