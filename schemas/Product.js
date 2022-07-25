export default {
    title: "Product",
    name: "product",
    type: "document",
    groups: [
        {

        }
    ],
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
            title: "Description",
            name: "description",
            type: "text",
            rows: 5,
            validation: Rule => Rule.max(400),
        },
        {
            title: "Price",
            name: "price",
            type: "number",
            validation: Rule => Rule.required().precision(2).positive(),
        },
        {
            title: "EAN",
            name: "ean",
            type: "number",
            validation: Rule => Rule.integer().positive().min(12).max(13),
        },
        {
            title: "Stock",
            name: "stock",
            type: "number",
            validation: Rule => Rule.integer().positive(),
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
        {
            title: "Images",
            name: "images",
            type: "array",
            of: [{type: "productImage"}],
            validation: Rule => Rule.required()
        },
        {
            title: "Reviews",
            name: "reviews",
            type: "array",
            of: [{type: "review"}]
        },
        {
            title: "Questions",
            name: "questions",
            type: "array",
            of: [{type: "question"}]
        },
        {
            title: "Posts",
            name: "posts",
            type: "array",
            of: [{type: "social"}]
        },
    ]
}