import S from '@sanity/desk-tool/structure-builder'

// prettier-ignore
export const discount = S.listItem()
  .title('Kortingen')
  .schemaType('discount')
  .child(
    S.documentTypeList('discount')
  )
