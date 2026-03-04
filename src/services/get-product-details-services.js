import { API_BASE_URL } from "./get-products-services";

export async function getProductDetails (ProdId) {
    try {
        const response = await fetch(`${API_BASE_URL}/${ProdId}` , {cache:"force-cache"})
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}