import { TagIcon } from '@sanity/icons'

export default {
  name: 'showType',
	title: 'Show Type',
  type: 'document',
  icon: TagIcon,
  fields: [
    // Type
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ],
  orderings: [
    {
      name: 'nameAsc',
      title: 'Name (A-Z)',
      by: [{ field: 'name', direction: 'asc' }]
    },
    {
      name: 'nameDesc',
      title: 'Name (Z-A)',
      by: [{ field: 'name', direction: 'desc' }]
    }
  ],
  preview: {
    select: { name: 'type' },
    prepare(selection) {
      const { name } = selection
      return {
        title: name
      }
    }
  }
}