export default {
    name: "accessories",
    title: "Accessories",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
            description: "Tytuł"
        },
        {
            name: "subtitle",
            type: "string",
            title: "Subtitle",
            description: "Podtytuł"
        },
        {
            title: 'Atrybuty',
            name: 'attributes',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            title: 'Genre',
            name: 'genre',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                list: [
                    {title: 'Podkłady', value: 'podkłady'},
                    {title: 'Akcesoria', value: 'akcesoria'},
                    {title: 'Listwy', value: 'listwy'},
                ]
            }
        },
        {
            title: 'Poster',
            name: 'poster',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alt',
                    options: {
                        isHighlighted: true,
                    }
                },
                {
                    name: 'attribution',
                    type: 'string',
                    title: 'Attribution',
                }
            ]
        }
    ],
}