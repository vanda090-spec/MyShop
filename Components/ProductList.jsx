import { useShop } from "../src/ShopContext"
import { ProductsCard } from "./ProductCard"
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

export const ProductList = () => {

    const { products, loading, error } = useShop()

    if (loading) {
        return <div className="flex justify-center items-center min-h-64 col-span-full">
            <CircularProgress aria-label="Loading…" />
        </div>
    }
    if (error) {
        return <div className="flex justify-center items-center min-h-64 col-span-full">
            <Alert severity="error">{error}</Alert>
        </div>
    }
    return products.map(p => <ProductsCard key={p.id} product={p} />)
}