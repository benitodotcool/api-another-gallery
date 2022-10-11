import S from '@sanity/desk-tool/structure-builder'
import { UsersIcon } from '@sanity/icons'

export const artists = S.listItem()
  .title('Artists')
  .icon(UsersIcon)
  .schemaType('artist')
  .child(
    S.documentTypeList('artist')
  )