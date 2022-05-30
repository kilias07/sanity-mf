export default {
    name: "shopsLogo",
    type: "document",
    title: "Shops LogosSection",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            description: "Nazwa sklepu",
        },
        {
            name: "featuredImage",
            type: "image",
            title: "Featured Image",
            description: "Główny obraz",
            options: {
                hotspot: true
            }
        },
    ]
}