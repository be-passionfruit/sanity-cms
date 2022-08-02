export default {
    title: "Product Image",
    name: "productImage",
    type: "image",
    fields: [{
        title: "Caption",
        name: "caption",
        description: "Alt-tekst bij de afbeelding",
        type: "string",
        options: { isHighlighted: true }
    }],
    options: {
        hotspot: true,
    }
}