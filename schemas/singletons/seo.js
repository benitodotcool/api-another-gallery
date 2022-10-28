import { RobotIcon } from '@sanity/icons'

const TITLE = 'SEO'

export default {
  name: 'seo',
  title: TITLE,
  type: 'document',
  icon: RobotIcon,
  groups: [
    {
      default: true,
      name: 'home',
      title: 'Home'
    },
    {
      name: 'shows',
      title: 'Shows'
    },
    {
      name: 'artists',
      title: 'Artists'
    }
  ],
  fields: [
    // HOME
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'home'
    },
    // SHOWS
    {
      name: 'imprimt',
      title: 'Imprimt',
      type: 'string',
      group: 'shows'
    },
    // ARTISTS
    {
      name: 'artistsIndex',
      title: 'INDEX',
      type: 'string',
      group: 'artists'
    }
  ]
}
