export default {
    title: "Blog",
    name: "blog",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            description: "Titel van het artikel",
            validation: Rule => Rule.required(),
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "title"
            },
            description: "Slug van het artikel",
            validation: Rule => Rule.required(),
        },
        {
            title: "Description",
            name: "description",
            description: "Introductie of beschrijving van het artikel",
            type: "text",
            rows: 6
        },
        {
            title: "Image",
            name: "featuredImage",
            type: 'image',
            description: "Hoofdafbeelding, zal gebruikt worden als thumbnail bij het delen van het artikel",
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
            description: "Body-tekst van het artikel",
            type: 'array', 
            of: [{type: 'block'}]
        }
    ]
}


/**
 * @Todo
 * Pick a bundle | product | routine to feature (OR)
 */