export default {
    title: "Influencer",
    name: "influencer",
    type: "document",
    fields: [
        {
            title: "Full Name",
            name: "name",
            type: "string",
            description: "Volledige naam van de influencer."
        },
        {
            title: "Amount",
            name: "amount",
            type: "number",
            description: "Korting in percentage %"
        },
        {
            title: "Promocode",
            name: "promoCode",
            type: "string",
            description: "Promocode uniek de influencer."
        },
        {
            title: "Sales",
            name: "sales",
            type: "number",
            readOnly: true,
            description: "Totale hoeveelheid sales van deze influencer."
        },
        {
            title: "Country",
            name: "country",
            type: "string",
            description: "Land van de influencer."
        }
    ]
}

/**
 * @Todo 
 * Autmatic generate promocode {FIRSTNAME}{AMOUNT}
 */