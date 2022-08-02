export default {
    title: "Bundles",
    name: "bundles",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            description: "Titel van het product",
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
            title: "Description",
            name: "description",
            description: "Beschrijving van het product",
            type: "text",
            rows: 5,
        },
        {
            title: "Image",
            name: "featuredImage",
            description: "Hoofdafbeelding van het product, zal als thumbnail gebruikt worden op elke product-card",
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
            description: "Prijs van het product",
            validation: Rule => Rule.required().precision(2).positive(),
        },
        {
            title: "Products",
            name: "products",
            description: "Producten die in deze bundel aanwezig zijn",
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
            title: "Images",
            name: "images",
            description: "Andere productafbeeldingen",
            type: "array",
            of: [{type: "productImage"}],
            validation: Rule => Rule.required()
        },
    ]
}