export default {
    title: "Influencer",
    name: "influencer",
    type: "document",
    fields: [
        {
            title: "Firstname",
            name: "firstName",
            type: "string",
        },
        {
            title: "Lastname",
            name: "lastName",
            type: "string",
        },
        {
            title: "Amount",
            name: "amount",
            type: "number",
            description: "Discount in percentage %"
        },
        {
            title: "Promocode",
            name: "promoCode",
            type: "string",
            description: "Promocode for influencers' audience."
        },
        {
            title: "Sales",
            name: "sales",
            type: "number",
            readOnly: true,
            description: "Amount of sales by this influencer to this date."
        },
        {
            title: "Country",
            name: "country",
            type: "string",
        }
    ]
}

/**
 * @Todo 
 * Autmatic generate promocode {FIRSTNAME}{AMOUNT}
 */