export default {
    title: "Routine",
    name: "routine",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            description: "Titel van de routine",
            validation: Rule => Rule.required(),
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            description: "Slug van de routine",
            options: {
                source: "title"
            },
            validation: Rule => Rule.required(),
        },
        {
            title: "Description",
            name: "description",
            type: "text",
            description: "Beschrijving van deze routine",
            rows: 5,
        },
        {
            title: "Image",
            name: "featuredImage",
            type: 'image',
            description: "Hoofdafbeelding, zal gebruikt worden als thumbnail van de routine",
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
            description: "Totale prijs van de routine",
            type: "number",
            validation: Rule => Rule.required().precision(2).positive(),
        },
        {
            title: "Products",
            name: "products",
            description: "Welke producten bevat deze routine?",
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
            description: "Tot welke categorieën behoort deze routine?",
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