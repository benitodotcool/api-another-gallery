import { PinIcon } from '@sanity/icons'

const GROUPS = [
  {
    default: true,
    name: 'main',
    title: 'Main'
  },
  {
    name: 'complement',
    title: 'Opening + Links'
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
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
      group: 'main',
    },
    // Adress
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: Rule => Rule.required(),
      group: 'main',
    },
    // City
    {
      name: 'city',
      title: 'City',
      type: 'string',
      validation: Rule => Rule.required(),
      group: 'main',
    },
    // Abreviation
    {
      name: 'abreviation',
      title: 'Abbreviation',
      type: 'string',
      validation: Rule => Rule.required()
    },
    // Slug
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      group: 'main',
      options: {
        source: 'city'
      }
    },
    // Geopoint
    // {
    //   name: 'geopoint',
    //   title: 'Geopoint',
    //   type: 'geopoint',
    //   group: 'main'
    // },
    // EDITORIAL
    // Openings
    {
      name: 'opening',
      title: 'Opening',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true
      },
      fields: [
        {
          name: 'hours',
          title: 'Hours',
          type: 'string'
        },
        {
          name: 'days',
          title: 'Days',
          type: 'string'
        }
      ],
      group: 'complement'
    },
    // Links
    {
      name: 'links',
      title: 'Links',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true
      },
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'string'
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url'
        }
      ],
      group: 'complement'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'body',
      group: 'editorial',
    },
    // SEO
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo.page',
      group: 'seo'
    }
  ],
  // PREVIEW
  preview: {
    select: {
      title: 'city',
      email: 'links.email',
      hours: 'opening.hours',
      days: 'opening.days',
    },
    prepare(selection) {
      const { title, email, hours, days } = selection

      return {
        title: title,
        subtitle: email,
        description: hours + '/' + days
      }
    }
  }
}