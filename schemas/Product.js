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
            description: "Naam van het product",
            validation: Rule => Rule.required(),
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            description: "Slug van het product",
            options: {
                source: "title"
            },
            validation: Rule => Rule.required(),
        },
        {
            title: "Image",
            name: "featuredImage",
            type: 'image',
            description: "Hoofdafbeelding, zal gebruikt worden als thumbnail van het product",
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
            description: "Beschrijving van het product",
            rows: 5,
            validation: Rule => Rule.max(400),
        },
        {
            title: "Price",
            name: "price",
            description: "Prijs van het product",
            type: "number",
            validation: Rule => Rule.required().precision(2).positive(),
        },
        {
            title: "EAN",
            name: "ean",
            type: "number",
            description: "De EAN-code van het product, bevind zich net onder de streepjescode",
            validation: Rule => Rule.integer().positive().min(12).max(13),
        },
        {
            title: "Stock",
            name: "stock",
            type: "number",
            description: "Huidige stock van het product, stock wordt automatisch geupdate na bestelling",
            validation: Rule => Rule.integer().positive(),
        },
        {
            title: "Categories",
            name: "categories",
            description: "Categorieën waartoe dit product behoort, zijn te beheren in het menu onder 'Categorieën'",
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
            description: "Andere productfoto's",
            of: [{type: "productImage"}],
            validation: Rule => Rule.required()
        },
        {
            title: 'Best-seller',
            name: 'bestseller',
            type: 'boolean',
            description: "Is dit product een best-seller?",
            initialValue: false,
        },
        {
            title: 'New',
            name: 'new',
            type: 'boolean',
            description: "Is dit een nieuw product?",
            initialValue: false,
        },
        {
            title: "Reviews",
            name: "reviews",
            type: "array",
            description: "Verschillende productreviews, zullen automatisch door bezoekers via de site ingevoerd kunnen worden",
            of: [{type: "review"}]
        },
        {
            title: "Questions",
            name: "questions",
            type: "array",
            description: "Verschillende vragen per product",
            of: [{type: "question"}]
        },
        {
            title: "Posts",
            name: "posts",
            type: "array",
            description: "Sociale media post met betrekking tot het product",
            of: [{type: "social"}]
        },
    ]
}