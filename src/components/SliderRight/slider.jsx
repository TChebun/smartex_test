import { useState } from 'react'
import { Button, Drawer, DatePicker, Form, Input } from 'antd'
import ruRU from 'antd/locale/ru_RU'

import './slider.scss'

const { RangePicker } = DatePicker

function Slider() {
    const [open, setOpen] = useState(false)
    const [inputItem, setInputItem] = useState('')
    const [dateItem, setdateItem] = useState([])
    const [formData, setFormData] = useState[[]]

    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }

    const addNewRow = () => {
        setFormData(
            formData.map((item) =>
                item.id
                    ? {
                          ...item,
                          title: inputItem,
                          startDate: dateItem[0],
                          endDate: dateItem[1],
                      }
                    : item
            )
        )
    }

    console.log(formData)

    return (
        <>
            <Button onClick={showDrawer} className="slider__button">
                Добавить запись
            </Button>
            <Drawer
                title="Добавить новую запись"
                placement="right"
                onClose={onClose}
                open={open}
                width="400"
            >
                <Form>
                    <Form.Item label="Название">
                        <Input onChange={(e) => setInputItem(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="Период">
                        <RangePicker
                            locale={ruRU}
                            format="DD/MM/YYYY"
                            onChange={(date) => setdateItem(date)}
                        />
                    </Form.Item>
                    <Button onClick={addNewRow} className="slider__button">
                        Добавить
                    </Button>
                </Form>
            </Drawer>
        </>
    )
}
export default Slider
