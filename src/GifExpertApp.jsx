import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import './styles.css'
import { useState } from 'react'

const GifExpertApp = () => {
  const [caterogies, setCategories] = useState(['One Punch']);
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