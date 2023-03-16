import React from 'react';
import Card from './includes/Card';

function List({ list, deleteListItem, cloneListItem, cloningInitialized }) {
    return (
        <div className='container'>
            <div className='col-md-8 offset-2 mt-5'></div>
            {list.map(item =>
                <Card item={item}
                    key={item.id}
                    deleteListItem={deleteListItem}
                    cloneListItem={cloneListItem}
                    cloneInit={cloningInitialized} />
            )}

        </div>

    )
}

export default List
