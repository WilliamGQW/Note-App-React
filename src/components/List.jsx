import React from 'react';
import Card from './includes/Card';

function List({ list, deleteListItem }) {
    return (
        <div className='container'>
            <div className='col-md-8 offset-2 mt-5'></div>
            {list.map(item =>
                <Card item={item}
                    key={item.id}
                    deleteListItem={deleteListItem} />
            )}

        </div>

    )
}

export default List
