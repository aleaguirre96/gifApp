import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

    // const categories = ['SailorMoon'];
    const [categories, setCategory] = useState([])

    /*const handleAdd = () => {
        setCategory(categoriesBefore =>  [...categoriesBefore, 'Sailor Moon'] );
    }*/
    //<button onClick={ handleAdd }>Add category</button>

    return (
        <div>
           <h2>GifExpertApp</h2>
           
           <AddCategory/>
           <hr/> 
           <ol>
               {
                 categories.map(
                     category => {
                         return <li key={category}>{category}</li>
                     }
                 ) 
               }
           </ol>
        </div>
    )
}