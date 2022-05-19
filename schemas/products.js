export default {
    name: "products",
    type: "document",
    title: "Products",
    description: "Tutaj będą wszystkie produkty",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            description: "Nazwa produktu",
        },
        {
            name: "code",
            title: "Code",
            type: "string",
            description: "Kod dekoru",
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            description: "Generuj link",
            options: {
                source: doc => `${doc.title}-${doc.code}` ,
                slugify: input => input
                                    .toLowerCase()
                                    .replace(/\s+/g, '-')
                                    .slice(0, 200)
            }
        },
        {
            name: "collection",
            type: "reference",
            title: "Collection",
            to: [{type: "collection"}]
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
        {
            name: 'gallery',
            type: 'object',
            title: 'Gallery',
            fields: [
                {
                    name: 'images',
                    type: 'array',
                    title: 'Images',
                    of: [
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Image',
                            options: {
                                hotspot: true,
                            },
                            fields: [
                                {
                                    name: 'alt',
                                    type: 'string',
                                    title: 'Alternative text',
                                },
                            ],
                        },
                    ],
                    options: {
                        layout: 'grid',
                    },
                },
                {
                    name: 'display',
                    type: 'string',
                    title: 'Display as',
                    description: 'How should we display these images?',
                    options: {
                        list: [
                            {title: 'Stacked on top of eachother', value: 'stacked'},
                            {title: 'In-line', value: 'inline'},
                            {title: 'Carousel', value: 'carousel'},
                        ],
                        layout: 'radio', // <-- defaults to 'dropdown'
                    },
                },
                {
                    name: 'zoom',
                    type: 'boolean',
                    title: 'Zoom enabled',
                    description: 'Should we enable zooming of images?',
                },
            ],
            preview: {
                select: {
                    images: 'images',
                    image: 'images.0',
                },
                prepare(selection) {
                    const {images, image} = selection;

                    return {
                        title: `Gallery block of ${Object.keys(images).length} images`,
                        subtitle: `Alt text: ${image.alt}`,
                        media: image,
                    };
                },
            },
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            description: "opis dekoru",
            of: [{type: "block"}]
        }
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "code",
            media: "featuredImage"
        }
    }
}