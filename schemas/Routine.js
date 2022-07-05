export default {
    title: "Routine",
    name: "routine",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            validation: Rule => Rule.required(),
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "title"
            },
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
        {
            title: "Price",
            name: "price",
            type: "number",
            validation: Rule => Rule.required().precision(2).positive(),
        },
        {
            title: "Products",
            name: "products",
            type: "array",
            of: [
                {
                  type: 'reference',
                  to: [
                    {type: 'product'},
                  ]
                }
            ]
        },
        {
            title: "Categories",
            name: "categories",
            type: "array",
            of: [
                {
                  type: "reference",
                  to: [
                    {type: "category"},
                  ]
                }
            ]
        },
    ]
}