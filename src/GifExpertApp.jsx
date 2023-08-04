import { useState } from 'react'
import './styles.css'
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {
  const [caterogies, setCategories] = useState(['Dragon Ball']);
  const onAddCategory = (newCategory) =>{
    if(caterogies.includes(newCategory)){
      alert('ya existe la categoria');
      return
    }; 
    
    setCategories([newCategory,...caterogies]) //operador spread
    //  console.log(newCategory)
  }
  
  return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory
      // setCategories = { setCategories }
      onNewCategory ={onAddCategory}
    />
    
    
      {
      caterogies.map(category => (
        <GifGrid
          key={category}
          category={category}
          />
         
        )
        
      )}
      
    
    </>
  )
}

export default GifExpertApp