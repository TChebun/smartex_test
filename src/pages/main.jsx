import { Layout } from 'antd'
import TableItem from '../components/Table/table'
import CalendarItem from '../components/Calendar/calendar'
import Slider from '../components/SliderRight/slider'

import './main.scss'

const { Header, Content, Sider } = Layout

function Main() {
    return (
        <div className="main">
            <Layout className="header">
                <Header className="header__wrapper">
                    Таблица с добавлением записей и выбором дат
                    <Slider />
                </Header>
            </Layout>
            <Layout className="main__wrapper">
                <Content className="main__content">
                    <TableItem />
                </Content>
                <Sider width="360" className="main__sider">
                    <CalendarItem />
                </Sider>
            </Layout>
        </div>
    )
}

export default Main
