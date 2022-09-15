import { PinIcon } from '@sanity/icons'

const GROUPS = [
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
]

export default {
  name: 'gallery',
	title: 'Gallery',
  type: 'document',
  icon: PinIcon,
  groups: GROUPS,
  fields: [
    // MAIN
    {
      name: 'name',
      title: 'Full name',
      type: 'string',
      validation: Rule => Rule.required(),
      group: 'main',
    },
    {
      name: 'orderingName',
      title: 'Ordering name',
      type: 'string',
      description: 'Only last name without diacritic (é, è, à, ë, ë, etc.)',
      validation: Rule => Rule.required(),
      group: 'main',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      group: 'main',
      options: {
        source: 'name'
      }
    },
    {
      name: 'birthInfos',
      title: 'Birth info(s)',
      type: 'string',
      description: 'ie: b. 1979',
      group: 'main',
    },
    // EDITORIAL
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'editorial',
      rows: 5
    },
    // SEO
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo.page',
      group: 'seo'
    }
  ]
}