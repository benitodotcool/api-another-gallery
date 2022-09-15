import { UserIcon } from '@sanity/icons'

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
  name: 'artist',
	title: 'Artist',
  type: 'document',
  icon: UserIcon,
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
  ],
  orderings: [
    {
      name: 'orderingNameAsc',
      title: 'Ordering name (A-Z)',
      by: [{ field: 'orderingName', direction: 'asc' }]
    },
    {
      name: 'orderingNameDesc',
      title: 'Ordering name (Z-A)',
      by: [{ field: 'orderingName', direction: 'desc' }]
    }
  ],
  preview: {
    select: {
      name: 'name',
      birthInfos: 'birthInfos'
    },
    prepare(selection) {
      const { birthInfos, name } = selection

      return {
        title: name,
        subtitle: birthInfos
      }
    }
  }
}