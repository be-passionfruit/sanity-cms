export default {
    title: "Discount",
    name: "discount",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            description: "Kortingscode zelf, bijvoorbeeld: BLACK15",
        },
        {
            title: "Description",
            name: "description",
            type: "text",
            description: "Beschrijving bij deze korting, bijvoorbeeld: korting voor Black Friday",
            rows: 3
        },
        {
            title: "Amount",
            name: "amount",
            type: "number",
            description: "Discount in percentage %, bijvoorbeeld: 15"
        },
        {
            title: "Start date",
            name: "startDate",
            type: "datetime",
            description: "Vanaf wanneer is deze kortingscode geldig?",
            options: {
                dateFormat: "dddd DD MMMM YYYY"
            },
        },
        {
            title: "End date",
            name: "endDate",
            type: "datetime",
            description: "Tot wanneer is deze kortingscode geldig?",
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