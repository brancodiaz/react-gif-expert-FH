import { useState } from "react";
import { AddCategory, GifGrid } from "./Components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = ( newCategory ) => {

        if(categories.includes(newCategory)) return;

        console.log(newCategory);
        setCategories([newCategory, ...categories]);        
    }
    return (
        <>
            <h1>Búsqueda de gifs</h1>

            <AddCategory 
                onNewCategory = {(value) => onAddCategory(value)}
             />

            {categories.map( category => (
                <GifGrid 
                    key = {category}
                    category = {category}
                />
                ))
            }
        </>
    );
}