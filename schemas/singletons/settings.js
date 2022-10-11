import { CogIcon } from '@sanity/icons'

const TITLE = 'Settings'

export default {
  name: 'settings',
  title: TITLE,
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      default: true,
      name: 'footer',
      title: 'Footer'
    },
    {
      name: 'imprint',
      title: 'Imprint'
    },
    {
      name: 'notFoundPage',
      title: '404 page'
    },
    {
      name: 'seo',
      title: 'SEO'
    }
  ],
  fields: [
    // Hero
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'footer'
    },
    {
      name: 'imprimt',
      title: 'Imprimt',
      type: 'string',
      group: 'imprint'
    },
    {
      name: 'error',
      title: 'Error',
      type: 'string',
      group: 'notFoundPage'
    },
  ],
}
