import S from '@sanity/desk-tool/structure-builder'

// prettier-ignore
export const influencer = S.listItem()
  .title('Influencers')
  .schemaType('influencer')
  .child(
    S.documentTypeList('influencer')
  )
