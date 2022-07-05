export default {
    title: "Question",
    name: "question",
    type: "document",
    fields: [
        {
            title: "Question",
            name: "question",
            type: "string",
        },
        {
            title: "Answer",
            name: "answer",
            type: "text",
            rows: 5,
            validation: Rule => Rule.max(200),
        },
    ]
}