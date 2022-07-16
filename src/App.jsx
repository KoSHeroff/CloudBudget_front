import description from './assets/description.png';

import capabilitiesBg1 from './assets/capabilities/Bg.png';
import capabilitiesBg2 from './assets/capabilities/Bg-1.png';
import capabilitiesBg3 from './assets/capabilities/Bg-2.png';

import { AiOutlineCloudDownload } from "react-icons/ai";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { VscFilePdf } from "react-icons/vsc";
import { BsFileText } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";


import './App.css'

function App() {

  return  (
    <>
      <div className='greetings'>
         <div className='header'>
          <div className='header-logo'>
            <div className='header-logo-icon icon'>
              <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.605 8.05002C20.605 7.61502 20.75 7.18002 20.75 6.60002C20.75 3.41002 18.14 0.800018 14.95 0.800018C12.63 0.800018 10.745 2.10502 9.73001 3.99002C9.44001 3.84502 8.86001 3.70002 8.42501 3.70002C6.39501 3.70002 4.80001 5.29502 4.80001 7.32502C4.80001 7.61502 4.80001 7.90502 4.94501 8.05002C2.33501 8.48502 0.450012 10.515 0.450012 13.125C0.450012 15.88 2.77001 18.2 5.52501 18.2H20.025C22.78 18.2 25.1 15.88 25.1 13.125C25.1 10.515 23.215 8.34002 20.605 8.05002Z" fill="white"/>
              </svg>
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
            <div className='burger-menu icon'>
              <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 72 72" width="100%" height="100%"><path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z"/></svg>
            </div>
            <div className='btn btn-fill'>
              Вход
            </div>
          </div>
         </div>

         <div className='content'>
          <div className='content-title'>
            CloudBudget
          </div>
          <div className='content-description'>
            Управление бюджетом в для всех.<br /> Всего 69,95 € в месяц после 7-дневной<br /> пробной версии за 4,99 €
          </div>
          <div className='btn'>Попробовать</div>
         </div>
      </div>
      <div className='description'>
        <div className='description-block'>
          <div className='description-block-title'>
            Простое приложение для управления бюджетом
          </div>
          <div className='description-block-text'>
            Наше приложение создано, чтобы вы могли в реальном времени управлять своим бюджетом и расходами в режиме онлайн с любого устройства. Оно предоставляет подробные отчеты о доходах и расходах с графиками, чтобы вы сразу могли увидеть расходы и бюджет. Читайте ниже, чтобы узнать больше.
          </div>
          <div className='description-block-text-link link'>Узнать подробнее</div>
        </div>
        <img className='description-image back' src={description} />
      </div>
      <div className='capabilities'>
        <div className='capabilities-title'>Возможности</div>
        <div className='capabilities-list'>
          <div className='capabilities-list-element'>
            <img className='capabilities-element-image' src={capabilitiesBg1} />
            <div className='capabilities-element-text'>
              <div className='capabilities-element-text-title'>
                Поддерживает все валюты и карты
              </div>
              <div className='capabilities-element-text-description'>
                Мы поддерживаем все популярные валюты и полностью настраиваем, чтобы добавить
              </div>
              <div className='capabilities-element-text-link link'>Подробнее</div>
            </div>
          </div>
          <div className='capabilities-list-element'>
            <img className='capabilities-element-image' src={capabilitiesBg2} />
            <div className='capabilities-element-text'>
              <div className='capabilities-element-text-title'>
                Управляйте своими расходами на ходу
              </div>
              <div className='capabilities-element-text-description'>
                Вы можете получить доступ к своей учетной записи из любой точки мира на любом устройстве
              </div>
              <div className='capabilities-element-text-link link'>Подробнее</div>
            </div>
          </div>
          <div className='capabilities-list-element'>
            <img className='capabilities-element-image' src={capabilitiesBg3} />
            <div className='capabilities-element-text'>
              <div className='capabilities-element-text-title'>
                Управление бюджетом осуществляется в облаке
              </div>
              <div className='capabilities-element-text-description'>
                Наше приложение создано для того, чтобы вы могли управлять управлять своим бюджетом. 
              </div>
              <div className='capabilities-element-text-link link'>Подробнее</div>
            </div>
          </div>
        </div>
      </div>
      <div className='technology'>
        <div className='technology-title'>Технологии</div>
        <div className='technology-group'>
          <div className='technology-element'>
            <div className='technology-element-number'>01</div>
            <div className='technology-element-description'>
              <div className='technology-element-description-logo icon'><AiOutlineCloudDownload /></div>
              <div className='technology-element-description-title'>Облачное хранение</div>
              <div className='technology-element-description-text'>Доступ из любой точки мира с любого устройства</div>
            </div>
          </div>
          <div className='technology-element'>
            <div className='technology-element-number'>02</div>
            <div className='technology-element-description'>
              <div className='technology-element-description-logo icon'><RiShieldKeyholeLine /></div>
              <div className='technology-element-description-title'>Безопасность</div>
              <div className='technology-element-description-text'>Вся информация хранится на защищенных облачных серверах</div>
            </div>
          </div>
          <div className='technology-element'>
            <div className='technology-element-number'>03</div>
            <div className='technology-element-description'>
              <div className='technology-element-description-logo icon'><VscFilePdf /></div>
              <div className='technology-element-description-title'>PDF Отчеты</div>
              <div className='technology-element-description-text'>Скачивайте ваши отчеты в удобном формате PDF</div>
            </div>
          </div>
          <div className='technology-element'>
            <div className='technology-element-number'>04</div>
            <div className='technology-element-description'>
              <div className='technology-element-description-logo icon'><BsFileText /></div>
              <div className='technology-element-description-title'>CSV Отчеты</div>
              <div className='technology-element-description-text'>Скачивайте ваши отчеты в удобном формате CSV</div>
            </div>
          </div>
        </div>
        <div className='description application'>
          <div className='description-block'>
            <div className='description-block-title'>
              Сосредоточьтесь на экономии финансов
            </div>
            <div className='description-block-text'>
              Мы помогаем вам отслеживать ваши привычки в расходах, чтобы вы могли легко определить и сократить ненужные расходы. Просто присоединяйтесь сегодня, чтобы начать!
            </div>
            <div className='icons-list'>
              <div className='icon'><FaGooglePlay /></div>
              <div className='icon'><IoLogoAppleAppstore /></div>
            </div>
          </div>
          <img className='description-image' src={description} />
        </div>
        <div className='contact'>
          <div className='contact-text'>
            <div className='contact-text-title'>Напишите нам</div>
            <div className='contact-text-description'>Остались вопросы или опасения? Просто заполните форму ниже, и наша служба поддержки свяжется с вами в течение 24 часов.</div>
          </div>
          <div className='contact-form'>
            <input placeholder="Имя" />
            <input placeholder="Телефон" />
            <div className='btn btn-color'>Отправить</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
