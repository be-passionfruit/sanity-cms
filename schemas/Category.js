export default {
    title: "Category",
    name: "category",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            validation: Rule => Rule.required(),
        },
        {
            title: "Description",
            name: "description",
            type: "text",
            rows: 5,
        },
        {
            title: "Image",
            name: "featuredImage",
            type: 'image',
            fields: [{
                title: "Caption",
                name: "caption",
                type: "string",
                options: { isHighlighted: true }
            }],
            options: { hotspot: true },
        },
    ]
}