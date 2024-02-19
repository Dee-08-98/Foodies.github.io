import React from 'react';
import PagesJumbo from '../Component/Jumbo/PagesJumbo';
import BookTable from '../Component/BookTable/BookTable'
import Footer from '../Component/Footer/Footer';
function Table(props) {
    return (
        <div>
            <PagesJumbo title='Your Favourite Table'></PagesJumbo>
            <BookTable></BookTable>
            <Footer></Footer>
        </div>
    );
}

export default Table;