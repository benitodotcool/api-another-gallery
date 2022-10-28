import S from '@sanity/desk-tool/structure-builder'

export const seo = S.listItem()
  .title('SEO (soon)')
  .schemaType('seo')
  .child(
    S.editor()
      .title('SEO')
      .schemaType('seo')
      .documentId('seo')
  )