export default {
    name: "geoPoints",
    type: "document",
    title: "Geopoints",
    fields: [
        {
            name: "location",
            title: "Location",
            type: "geopoint",
            description: "Wpisz salon",
        },
        {
            name: "title",
            title: "Title",
            type: "string",
            description: "Nazwa salonu",
        },
        {
            name: "featuredImage",
            type: "image",
            title: "Featured Image",
            description: "Główny obraz",
            options: {
                hotspot: true
            }
        }
    ]
}