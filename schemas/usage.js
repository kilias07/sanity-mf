export default {
    name: "usage",
    title: "Usage",
    description: "Zastosowanie",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
            description: "Tytuł"
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            description: "Generuj link",
            options: {
                source: "title",
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            name: "shortDescription",
            title: "Short Description",
            type: "text",
            description: "krótki opis do karty (modala)",
            validation: Rule => Rule.required().min(10).max(500)
        },
        {
            name: "description",
            type: "array",
            title: "Description",
            description: "Tekst artykułu",
            of: [
                {
                    type: "block",
                },
                {
                    type: 'image',
                }
            ]
        },
        {
            name: "featuredImage",
            type: "image",
            title: "Featured Image",
            description: "główne zdjęcie artykułu",
            options: {
                hotspot: true,
            }
        },
        {
            name: "mainPage",
            type: "boolean",
            title: "Main Page",
            description: "dodaj na stronę główną",
        },
    ]
}