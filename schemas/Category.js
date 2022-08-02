export default {
    title: "Category",
    name: "category",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            description: "Titel van de categorie",
            validation: Rule => Rule.required(),
        },
        {
            title: "Description",
            name: "description",
            type: "text",
            description: "Beschrijving van de categorie",
            rows: 5,
        },
        {
            title: "Image",
            name: "featuredImage",
            type: 'image',
            description: "Hoofdafbeelding van het product, zal als thumbnail gebruikt worden in de categorie-pagina's",
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