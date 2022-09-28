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
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
      group: 'main',
    },
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
    // Date
    {
      name: 'dates',
      title: 'Dates',
      type: 'period',
      group: 'editorial'
    },
    // Artists
    {
      name: 'artist',
      title: 'Artist(s)',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'artist'}
          ],
          validation: Rule => Rule.required()
        }
      ],
      group: 'main'
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
      group: 'editorial'
    },
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
    // Body
    // {
    //   name: 'body',
    //   title: 'Body',
    //   type: 'body',
    //   group: 'editorial'
    // },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo.page',
      group: 'seo'
    }
  ],
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
  preview: {
    select: {
      title: 'title',
      startingDate: 'dates.starting',
      endingDate: 'dates.ending',
    },
    prepare(selection) {
      const { title, startingDate, endingDate } = selection

      return {
        title: title,
        subtitle: `${startingDate}${endingDate && ' - ' + endingDate}`
      }
    }
  }
}