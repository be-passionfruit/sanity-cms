import S from '@sanity/desk-tool/structure-builder'

// prettier-ignore
export const bundles = S.listItem()
  .title('Paketten')
  .schemaType('bundles')
  .child(
    S.documentTypeList('bundles')
  )
