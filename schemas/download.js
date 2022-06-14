export default {
    title: 'Download',
    name: 'download',
    type: 'document',
    fields: [
        {
            title: "title",
            name: "title",
            type: "string",
            description: "name of file",
        },
        {
            title: "Files",
            name: "files",
            type: 'file',
            fields: [
                {
                    name: 'description',
                    type: 'string',
                    title: 'Description'
                },
            ]
        }
    ]
}


