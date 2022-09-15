import { UserIcon } from '@sanity/icons'

export default {
  name: 'artist',
	title: 'Artist',
  type: 'document',
  icon: UserIcon,
  fields: [
    {
      name: 'name',
      title: 'Full name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'orderingName',
      title: 'Ordering name',
      type: 'string',
      description: 'Without diacritic (é, è, à, ë, ë, etc.)',
      validation: Rule => Rule.required()
    },
    {
      name: 'birthInfos',
      title: 'Birth info(s)',
      type: 'string',
      description: 'ie: b. 1979'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'name'
      }
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