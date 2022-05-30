export default {
    name: "certifcateLogo",
    type: "document",
    title: "Certifcate LogosSection",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            description: "Nazwa certyfikatu",
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