export default {
    name: "heroSection",
    type: "document",
    title: "HeroSection",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            description: "Główny tekst",
        },
        {
            name: "aditionalText",
            title: "Aditional Text",
            type: "string",
            description: "Dodatkowy tekst",
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