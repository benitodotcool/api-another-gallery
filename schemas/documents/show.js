import { CalendarIcon } from '@sanity/icons'

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
  name: 'show',
	title: 'Show',
  type: 'document',
  icon: CalendarIcon,
  groups: GROUPS,
  fields: [
    // MAIN
    // Is Published?
    {
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      description: 'Set to Published if this show is visible on another.gallery/shows/…',
      validation: Rule => Rule.required(),
      initialValue: true,
      group: 'main'
    },
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
      group: 'main',
    },
    // Slug
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      description: 'Need to create the route on another.gallery/shows/…',
      group: 'main',
      options: {
        source: 'title'
      }
    },
    // Gallery
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'reference',
      to: [{type: 'gallery'}],
      group: 'main',
      validation: Rule => Rule.required(),
    },
    // Images
    {
      name: 'images',
      title: 'Image(s)',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          // options: {
          //   hotspot: true,
          // },
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              options: {
                isHighlighted: true // <-- make this field easily accessible
              }
            },
          ]
        },
      ],
      options: {
        layout: 'grid',
      },
      description: 'Order matters',
      group: 'main'
    },
    // EDITORIAL
    // Date
    {
      name: 'dates',
      title: 'Dates',
      type: 'period',
      group: 'editorial'
    },
    // Works
    {
      name: 'works',
      title: 'Works',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'work'}
          ],
          validation: Rule => Rule.required()
        }
      ],
      group: 'editorial',
      description: 'Each work need to be unique + order matters',
      validation: Rule => Rule.unique()
    },
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
  // ORDERINGS
  orderings: [
    {
      name: 'orderingDateDesc',
      title: 'Starting date (desc)',
      by: [{ field: 'dates.starting', direction: 'desc' }]
    },
    {
      name: 'orderingDateAsc',
      title: 'Starting date (asc)',
      by: [{ field: 'dates.ending', direction: 'asc' }]
    }
  ],
  // PREVIEW
  preview: {
    select: {
      title: 'title',
      startingDate: 'dates.starting',
      endingDate: 'dates.ending',
      media: 'images.0'
    },
    prepare(selection) {
      const { title, startingDate, endingDate, media } = selection

      return {
        title: title,
        subtitle: `${startingDate}${endingDate && ' - ' + endingDate}`,
        media: media
      }
    }
  }
}