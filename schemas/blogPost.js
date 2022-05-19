export default {
    name: "posts",
    title: "Index posts",
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
            name: "description",
            type: "array",
            title: "Description",
            description: "Tekst artykułu",
            of: [{type: "block"}]
        },
        {
            name: "category",
            type: "reference",
            title: "Category of blog",
            to: [{type: "category"}],
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
    ]
}