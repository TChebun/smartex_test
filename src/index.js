import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import ThemeContext from './themeContext'
import ruRU from 'antd/locale/ru_RU'
import './assets/style/style.scss'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <ThemeContext.Provider value={'Day'}>
            <ConfigProvider locale={ruRU}>
                <App />
            </ConfigProvider>
        </ThemeContext.Provider>
        ,
    </React.StrictMode>
)
