export default {
    title: "Social",
    name: "social",
    type: "document",
    fields: [
        {
            title: "Image",
            name: "image",
            type: "image",
            fields: [{
                title: "Caption",
                name: "caption",
                type: "string",
                options: { isHighlighted: true }
            }],
            options: { hotspot: true },
        },
        {
            title: "Creator",
            name: "creator",
            type: "string",
        },
        {
            title: "Link",
            name: "link",
            type: "url",
            validation: Rule => Rule.uri({
                scheme: ['http', 'https']
            })
        }
    ]
}