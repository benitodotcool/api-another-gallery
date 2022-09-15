import S from '@sanity/desk-tool/structure-builder'
import { PinIcon } from '@sanity/icons'

// prettier-ignore
export const galleries = S.listItem()
  .title('Galleries')
  .icon(PinIcon)
  .schemaType('gallery')
  .child(
    S.documentTypeList('gallery')
  )