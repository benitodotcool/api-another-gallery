import S from '@sanity/desk-tool/structure-builder'
import { CalendarIcon } from '@sanity/icons'

// prettier-ignore
export const events = S.listItem()
  .title('Events')
  .icon(CalendarIcon)
  .schemaType('event')
  .child(
    S.documentTypeList('event')
  )