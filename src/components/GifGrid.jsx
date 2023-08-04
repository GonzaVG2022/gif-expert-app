import PropTypes from 'prop-types'
import { GifItem } from './GifItem';
import { useFechGifs } from '../hooks/useFechGifs';

export const GifGrid = ({category}) => {

  const {images, isLoading} = useFechGifs( category );
  // console.log({images, isLoading})
   
  return (
    <>
    <h3>{category}</h3>
    {
      //<Loading isLoading={isLoading}/> crear componente personalizado
      isLoading && <h4>...Cargando...</h4>
    }
      {
        images.map((images) => (
           <GifItem
              key={images.id}
              {...images}
           />
          ))
      }
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

