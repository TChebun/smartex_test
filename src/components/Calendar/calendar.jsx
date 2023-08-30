import { Calendar } from 'antd'
import ruRU from 'antd/locale/ru_RU'

const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode)
}

function CalendarItem() {
    const wrapperStyle = {
        width: 350,
    }
    return (
        <div style={wrapperStyle}>
            <Calendar
                locale={ruRU}
                fullscreen={false}
                onPanelChange={onPanelChange}
                disabled
            />
        </div>
    )
}

export default CalendarItem
