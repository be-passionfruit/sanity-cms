import S from '@sanity/desk-tool/structure-builder'

// prettier-ignore
export const routine = S.listItem()
  .title('Routines')
  .schemaType('routine')
  .child(
    S.documentTypeList('routine')
  )
