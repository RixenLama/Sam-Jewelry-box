import { createClient } from "contentful"

const UseContentful = () =>{

    const client = createClient({
        space: "yiclsl60atxf",
        accessToken: "2Hm7Yo09xT7jUHTboWPUHV3LRiKQVMMc-KdZcfVe1DA",
    });

    const getImages = async () => {
        try{
            const entries = await client.getEntries({
                content_type: "shopitem",
                select: "fields"
            });

            const filteredEntries = entries.items.map((item) =>{
                const image = item.fields.image.fields.file

                return{
                    ...item.fields,
                    image
                }
            })
        
        return filteredEntries
        } catch (error) {
            console.log('Error fectching shop items: ${error}')
        }
    }
    
    return { getImages }
}

export default UseContentful