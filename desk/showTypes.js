import S from '@sanity/desk-tool/structure-builder'
import { TagIcon } from '@sanity/icons'

export const showTypes = S.listItem()
  .title('Show Types')
  .icon(TagIcon)
  .schemaType('showType')
  .child(
    S.documentTypeList('showType')
  )