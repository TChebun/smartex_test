import { Table } from 'antd'

function TableItem() {
    const dataSource = [
        { id: 0, title: 'Йога', startDate: '28.08.12', endDate: '28.08.12' },
        { id: 1, title: 'Танцы', startDate: '28.08.12', endDate: '28.08.12' },
    ]

    const columns = [
        {
            title: 'Запись',
            dataIndex: 'title',
            // width: '20%',
        },
        {
            title: 'Дата начала',
            dataIndex: 'startDate',
            // width: '20%',
        },
        {
            title: 'Дата окончания',
            dataIndex: 'endDate',
            // width: '20%',
        },
    ]

    return (
        <Table tableLayout="auto" dataSource={dataSource} columns={columns} />
    )
}

export default TableItem
