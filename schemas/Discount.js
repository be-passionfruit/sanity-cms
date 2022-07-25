export default {
    title: "Discount",
    name: "discount",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
        },
        {
            title: "Description",
            name: "description",
            type: "text",
            rows: 3
        },
        {
            title: "Amount",
            name: "amount",
            type: "number",
            description: "Discount in percentage %"
        },
        {
            title: "Start date",
            name: "startDate",
            type: "datetime",
            options: {
                dateFormat: "dddd DD MMMM YYYY"
            },
        },
        {
            title: "End date",
            name: "endDate",
            type: "datetime",
            options: {
                dateFormat: "dddd DD MMMM YYYY"
            },
        },
    ]
}

/**
 * @Todo 
 * Handle error when end date is before start date @one
 * Let admin choose between € of % discount @two
 */


 /**
  * @two
  * {
  title: 'Genre',
  name: 'genre',
  type: 'string',
  options: {
    list: [
      {title: 'Sci-Fi', value: 'sci-fi'},
      {title: 'Western', value: 'western'}
    ], // <-- predefined values
    layout: 'radio' // <-- defaults to 'dropdown'
  }
}
  */