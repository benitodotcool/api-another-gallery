import S from '@sanity/desk-tool/structure-builder'

export const settings = S.listItem()
  .title('Settings (soon)')
  .schemaType('settings')
  .child(
    S.editor()
      .title('Settings')
      .schemaType('settings')
      .documentId('settings')
  )