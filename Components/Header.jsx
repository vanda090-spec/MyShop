import { useShop } from "../src/ShopContext";
import Button from '@mui/material/Button';

export function AllProductsButton() {
    const { getProducts } = useShop()
    return (   
        <Button variant="contained" onClick={getProducts}>All Products</Button>
    )
}