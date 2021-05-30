import React, {createContext, useState} from 'react'

export const BookListContext = createContext()

const BookListProvider = (props) => {
    
    const [books, setBooks] = useState([
        {id:1 , title:'book1'},
        {id:2 , title:'book2'},
        {id:3 , title:'book3'},
        {id:4 , title:'book4'},
    ])

    
    return (
        <BookListContext.Provider value={{books}}>
        
            {props.children}
        </BookListContext.Provider>
    );
}
 
export default BookListProvider;