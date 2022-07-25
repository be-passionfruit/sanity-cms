export default {
    title: "Blog",
    name: "blog",
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
            rows: 6
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
        {
            title: 'Body', 
            name: 'body',
            type: 'array', 
            of: [{type: 'block'}]
        }
    ]
}


/**
 * @Todo
 * Pick a bundle | product | routine to feature (OR)
 */