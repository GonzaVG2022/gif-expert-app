import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('')
  const onChangeInput = ({target}) => {
    setInputValue(target.value)
    // console.log(target.value)
  
  }
const onSubmit = (event) =>{
    event.preventDefault();
    if( inputValue.trim().length < 1 ) return; //evito mandar vacio
    // setCategories(caterogies =>[...caterogies,inputValue])//llamo al setCategori ya que tengo la info respectiva
    onNewCategory(inputValue.trim())
    setInputValue('')
  }
    return (
    <form onSubmit={ onSubmit}>
    <input 
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={ onChangeInput }
     />
    </form>
  )
}
