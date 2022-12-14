import S from '@sanity/desk-tool/structure-builder'
import { works } from './desk/works'
import { artists } from './desk/artists'
import { shows } from './desk/shows'
import { galleries } from './desk/galleries'
import { home } from './desk/home'
import { settings } from './desk/settings'
import { seo } from './desk/seo'
import { countries } from './desk/countries'
import { showTypes } from './desk/showTypes'

// If you add document types to desk structure manually, you can add them to this array to prevent duplicates in the root pane
const DOCUMENT_TYPES_IN_STRUCTURE = [
  // singletons
  'home',
  'settings',
  // documents
  'artist',
  'show',
  'gallery',
  'work',
  'country',
  'showType',
  // Media plugin
  'media.tag',
]

export default () => {
  // prettier-ignore
  return (
    S.list()
      .title('Content')
      .items([
        artists,
        works,
        shows,
        S.divider(),
        galleries,
        S.divider(),
        countries,
        showTypes,
        // Automatically add new document types to the root pane
        ...S.documentTypeListItems().filter(listItem => !DOCUMENT_TYPES_IN_STRUCTURE.includes(listItem.getId())),
        S.divider(),
        home,
        settings,
        S.divider(),
        seo
      ])
  )
}
    