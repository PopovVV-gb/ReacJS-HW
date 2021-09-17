const API_URL_FATCATS = "https://cataas.com//api/cats?tags=fat" 
const CAT_IMAGE_URL_PREFIX = "https://cataas.com/c"

export const catsApi = {
    loadCats: async() => {
        try {
            const response = await fetch(API_URL_FATCATS);
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            const intermediateResult = await response.json();
            const result = intermediateResult.map((item) =>({
                ...item,
                    img: `${CAT_IMAGE_URL_PREFIX}/${item.id}`,
                }))
            return [null, result]
        }
        catch(error) {
            return [error, null];
        }       
    }
}