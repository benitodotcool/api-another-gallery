import { HomeIcon } from '@sanity/icons'

const TITLE = 'Home'

export default {
  name: 'home',
  title: TITLE,
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      default: true,
      name: 'main',
      title: 'Main'
    },
    {
      name: 'editorial',
      title: 'Editorial'
    },
    {
      name: 'seo',
      title: 'SEO'
    }
  ],
  fields: [
    //MAIN
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'main'
    },
    // EDITORIAL
    // Body
    {
      name: 'body',
      title: 'Body',
      type: 'body',
      group: 'editorial'
    },
    // SEO
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo.page',
      group: 'seo'
    }
  ],
}
