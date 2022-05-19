export default {
    name: "collection",
    type: "document",
    title: "Product collection",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Name of collection",
            description: "Nazwa kolekcji"
        },
        {
            name: "description",
            type: "array",
            title: "Description",
            description: "Opis kolekcji",
            of: [{type: "block"}]
        },
        {
            name: "featuredImage",
            type: 'image',
            title: "Image",
            description: "zdjęcie kolekcji",
            options: {
                hotspot: true,
            }
        },
        {
            name: "mainImage",
            type: 'image',
            title: "Image on main site",
            description: "zdjęcie na główną stronę",
            options: {
                hotspot: true,
            }
        },
        {
            name: "properties",
            title: "Properties",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "dimensions",
                            type: "object",
                            title: "Dimensions",
                            description: "Wymiary",
                            fields: [
                                {name: "length", type: "number", title: "Length", description: "długość (mm)"},
                                {name: "width", type: "number", title: "Width", description: "szerokość (mm)"},
                                {name: "thickness", type: "number", title: "Thickness", description: "grubość (mm)"}
                            ]
                        },
                        {
                            name: "package",
                            type: "object",
                            title: "Package",
                            description: "paczka",
                            fields: [
                                {name: "square", type: "number", title: "Square meters", description: "metry kwadratowe"},
                                {name: "numberOfBoards", type: "number", title: "Number of Boards", description: "ilość sztuk paneli w paczce"}
                            ]
                        },
                        {
                            name: "abrassion",
                            type: "object",
                            title: "Abrassion",
                            description: "klasa ścieralności",
                            fields: [
                                {name: "abrassion", type: "string", title: "Abrassion", description: "klasa ścieralności", options: {
                                        list: ["AC4/32","AC5/32","AC5/33"]}}
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}