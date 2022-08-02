import S from '@sanity/desk-tool/structure-builder'

// prettier-ignore
export const product = S.listItem()
  .title('Producten')
  .schemaType('product')
  .child(
    S.documentTypeList('product')
  )
