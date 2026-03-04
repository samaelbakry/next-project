export const API_BASE_URL= "https://dummyjson.com/products"

export async function getAllProducts () {
    try {
        const response = await fetch(`${API_BASE_URL}` , {cache:"force-cache"})
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
        
    }
}