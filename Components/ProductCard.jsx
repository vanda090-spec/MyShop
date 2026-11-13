import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';


export const ProductsCard = ({ product }) => {

  const [showMore, setShowMore] = useState(false)
  return (

    <Card sx={{ width: '100%', borderRadius: 3, height: '100%' }} className='bg-blue-500 shadow-lg shadow-blue-500/50'>

      <CardContent className="flex flex-col gap-2 h-full justify-between">

        <div>
          <img className="h-48 w-full object-contain" src={product.thumbnail} alt={product.title} />
          <h1 className='font-serif text-lg font-semibold text-center'>{product.title}</h1>
          <div className="flex justify-center">
            <Chip label={product.category} color="primary" /></div>

        </div>
        <div className='flex gap-4 justify-between'>
          <p className='font-serif font-semibold text-green-600 text-lg font-bold '>{product.price}$</p>
          <Rating value={product.rating} precision={0.1} readOnly />
        </div>

        <div>
          <p className={!showMore ? 'font-serif line-clamp-3' : 'font-serif'}>Description:{product.description}</p>
        </div>

        <Button variant="contained" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Read Less' : 'Read More'}
        </Button>

      </CardContent>

    </Card>

  )
}