import { createClient } from "contentful"

const UseContentful = () =>{

    const client = createClient({
        space: "yiclsl60atxf",
        accessToken: "2Hm7Yo09xT7jUHTboWPUHV3LRiKQVMMc-KdZcfVe1DA",
    });

    const getBracelet = async () => {
        try{
            const bracelet = await client.getEntries({
                content_type: "bracelet",
                select: "fields"
            });
            const filterBracelet = bracelet.items.map((a) =>{
                const braceletImage  = a.fields.image.fields;

                return{
                    braceletImage
                }
            }) 

        return{
            filterBracelet
        }
        } catch (error) {
            console.log('Error fectching shop items: ${error}')
        }
    }
    return { getBracelet }
}

export default UseContentful