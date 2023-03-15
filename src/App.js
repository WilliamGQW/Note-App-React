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
    const [currentSelectedItem, setCurrentSelectedItem] = useState();

    // remove list item
    //  by filtering out unmatched id
    const deleteCurrentItem = (id) => {
        setList(list.filter((item) => (item.id !== id)))
    }

    // store a new list item to the list of data
    const storeNewListItem = (e) => {
        // let newList = [...list, e]; // add to tail
        let newList = [e, ...list]; // add to head
        setList(newList);
        // console.log(newList);

        // or...
        // let newList = [];
        // list.map((item) => {
        //     newList.push(item);
        // })
        // newList.unshift(e);

    }

    // clone the list item values;
    const cloneCurrentItem = (id) => {
        //filter out the item from list which has the same id as the current item id.
        console.log(id);
        setCurrentSelectedItem(list.filter((item) =>
            item.id === id
        ));

    }

    return (
        <>
            <Header />
            <Form store={storeNewListItem}
                currentSelected={currentSelectedItem} />
            <List list={list} deleteListItem={deleteCurrentItem}
                cloneListItem={cloneCurrentItem} />
        </>
    )
}

export default App;