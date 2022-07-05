import S from '@sanity/desk-tool/structure-builder'

// prettier-ignore
export const routine = S.listItem()
  .title('Routine')
  .schemaType('routine')
  .child(
    S.documentTypeList('routine')
  )
