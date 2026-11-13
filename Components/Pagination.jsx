import { useShop } from "../src/ShopContext";
import Button from '@mui/material/Button';

export function ProductsByPage() {

    const { getCurrentPage, currentPage, totalProducts } = useShop()

    return (
        <div className="flex gap-4">
            <Button variant="contained" onClick={() => getCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                Previous
            </Button>
            <span font-semibold self-center>Page {currentPage} of {Math.ceil(totalProducts / 10)}</span>
            <Button variant="contained" onClick={() => getCurrentPage(currentPage + 1)} disabled={currentPage * 10 >= totalProducts}>
                Next
            </Button>
        </div>

    )
}