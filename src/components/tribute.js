import React from 'react';

import Header from './Header';
import Book1984 from './Book1984';
import GeorgeOrwell from './GeorgeOrwell';
import BookAnimalFarm from './BookAnimalFarm';
import Footer from './Footer';

const Tribute = () => {
    return <div>

                <Header />

                <div className="container">

                    <Book1984 />

                    <GeorgeOrwell />

                    <BookAnimalFarm />
                
                </div>

                <Footer />

           </div>;
};

export default Tribute;