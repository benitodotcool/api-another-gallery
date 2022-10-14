import S from '@sanity/desk-tool/structure-builder'
import { EarthGlobeIcon } from '@sanity/icons'

export const countries = S.listItem()
  .title('Countries')
  .icon(EarthGlobeIcon)
  .schemaType('country')
  .child(
    S.documentTypeList('country')
  )