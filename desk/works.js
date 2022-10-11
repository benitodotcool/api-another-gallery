import S from '@sanity/desk-tool/structure-builder'
import { ImagesIcon } from '@sanity/icons'

export const works = S.listItem()
  .title('Works')
  .icon(ImagesIcon)
  .schemaType('work')
  .child(
    S.documentTypeList('work')
  )