import { useShop } from "../src/ShopContext";
import Button from '@mui/material/Button';

export function ProductsByCategory() {

    const { getProductByCategory } = useShop()

    return (

        <div className="flex flex-wrap justify-center gap-4 ">
            <Button variant="contained" onClick={() => getProductByCategory("tablets")}>
                tablets
            </Button>
            <Button variant="contained" onClick={() => getProductByCategory("sunglasses")}>
                sunglasses
            </Button>
            <Button variant="contained" onClick={() => getProductByCategory("tops")}>
                tops
            </Button>
            <Button variant="contained" onClick={() => getProductByCategory("sports-accessories")}>
                sport-accessories
            </Button>
        </div>

    )
}
