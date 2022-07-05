import S from '@sanity/desk-tool/structure-builder'

// prettier-ignore
export const category = S.listItem()
  .title('Categorie')
  .schemaType('category')
  .child(
    S.documentTypeList('category')
  )
