import { EarthGlobeIcon } from '@sanity/icons'

export default {
  name: 'country',
	title: 'Country',
  type: 'document',
  icon: EarthGlobeIcon,
  fields: [
    // Title
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    // Abreviation
    {
      name: 'abreviation',
      title: 'Abbreviation',
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
    select: {
      name: 'name',
      abreviation: 'abreviation'
    },
    prepare(selection) {
      const { name, abreviation } = selection

      return {
        title: name,
        subtitle: abreviation
      }
    }
  }
}