import S from '@sanity/desk-tool/structure-builder'

export const home = S.listItem()
  .title('Home (soon)')
  .schemaType('home')
  .child(
    S.editor()
      .title('Home')
      .schemaType('home')
      .documentId('home')
  )