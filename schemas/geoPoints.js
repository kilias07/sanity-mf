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
            name: "address",
            title: "Address",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "streetName",
                            type: "string",
                            title: "Street Name",
                            description: "Nazwa ulicy i numer",
                        },
                        {
                            name: "postalCode",
                            type: "string",
                            title: "Postal Code",
                            description: "Kod pocztowy",
                        },
                        {
                            name: "cityName",
                            type: "string",
                            title: "City name",
                            description: "Nazwa miasta",
                        }
                    ]
                }
            ]
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