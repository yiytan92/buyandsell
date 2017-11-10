import React from 'react';
import ItemEntry from './ItemEntry';

class ItemList extends React.Component {
    render() {
        console.log('this props', this.props)
        return (
            <div id='item-list-wrapper'>
                <div className='container'>
                    <div className='row' >
                        {this.props.items.map((item, index) => 
                            <div className='col-lg-4' key={index} >
                                <ItemEntry item={item} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemList;