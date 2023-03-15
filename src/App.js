import { useState } from 'react';
import Header from './components/Header'
import List from './components/List'
import Form from './components/form/Form'
function App() {

    // need to send this data to List.jsx
    const listData = [
        {
            'id': 1,
            'text': 'Test title first',
            'description': 'Lorem Ipsum is simply dummy text of the printing. '
        },
        {
            'id': 2,
            'text': 'Test title second',
            'description': 'Lorem Ipsum is simply dummy text of the printing. '
        },
        {
            'id': 3,
            'text': 'Test title third',
            'description': 'Lorem Ipsum is simply dummy text of the printing. '
        },
        {
            'id': 4,
            'text': 'Test title four',
            'description': 'Lorem Ipsum is simply dummy text of the printing. '
        },
    ];

    // states
    const [list, setList] = useState(listData);

    // remove list item
    //  by filtering out unmatched id
    const deleteCurrentItem = (id) => {
        setList(list.filter((item) => (item.id !== id)))
    }

    return (
        <>
            <Header />
            <Form />
            <List list={list} deleteListItem={deleteCurrentItem} />
        </>
    )
}

export default App;