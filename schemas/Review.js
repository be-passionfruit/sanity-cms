export default {
    title: "Review",
    name: "review",
    type: "document",
    fields: [
        {
            title: "FirstName",
            name: "firstName",
            type: "string"
        },
        {
            title: "LastName",
            name: "lastName",
            type: "string"
        },
        {
            title: "Age",
            name: "age",
            type: "number",
            validation: Rule => Rule.min(16).max(70).integer(),
        },
        {
            title: "Skin Type",
            name: "skinType",
            type: "string",
            options: {
                list: [
                    "Sensitive",
                    "Dry",
                    "Oily",
                    "Normal"
                ]
            }
        },
        {
            title: "Rating",
            name: "rating",
            type: "number",
            validation: Rule => Rule.min(0).max(5).precision(1),
        },
        {
            title: "Title",
            name: "title",
            type: "string",
        },
        {
            title: "Body",
            name: "body",
            type: "text",
            rows: 5,
            validation: Rule => Rule.max(200),
        },
    ]
}