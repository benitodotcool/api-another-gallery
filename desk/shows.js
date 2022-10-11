import S from '@sanity/desk-tool/structure-builder'
import { CalendarIcon } from '@sanity/icons'

export const shows = S.listItem()
  .title('Shows')
  .icon(CalendarIcon)
  .schemaType('show')
  .child(
    S.documentTypeList('show')
  )