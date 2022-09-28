import { ImageIcon } from '@sanity/icons'

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
  name: 'work',
	title: 'Work',
  type: 'document',
  icon: ImageIcon,
  groups: GROUPS,
  fields: [
    // MAIN
    // Is Published?
    {
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      description: 'Set to Published if this work is visible on another.gallery/works/…',
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
      description: 'Need to create the route on another.gallery/works/…',
      group: 'main',
      options: {
        source: 'title'
      }
    },
    // Artist
    {
      name: 'artist',
      title: 'Artist',
      type: 'reference',
      to: [{type: 'artist'}],
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
      group: 'main',
      description: 'Order matters'
    },
    // Credits
    {
      name: 'credits',
      title: 'Photography credits',
      type: 'string',
      description: 'Recommended (only the photograph\'s first and last name)',
      group: 'main',
    },
    // EDITORIAL
    // Main
    {
      name: 'mainEditorial',
      title: 'Main',
      type: 'editorial.main',
      group: 'editorial'
    },
    // Body
    {
      name: 'body',
      title: 'Body',
      type: 'body',
      group: 'editorial'
    },
    //SEO
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo.page',
      group: 'seo'
    }
  ],
  // ORDERINGS
  orderings: [
    // Year
    {
      name: 'orderingYearAsc',
      title: 'Year (asc)',
      by: [{ field: 'mainEditorial.year', direction: 'asc' }]
    },
    {
      name: 'orderingYearDesc',
      title: 'Year (desc)',
      by: [{ field: 'mainEditorial.year', direction: 'desc' }]
    },
    // Title
    {
      name: 'orderingTitleAsc',
      title: 'Title (asc)',
      by: [{ field: 'title', direction: 'asc' }]
    },
    {
      name: 'orderingTitleDesc',
      title: 'Title (desc)',
      by: [{ field: 'title', direction: 'desc' }]
    },
    // Artist
    {
      name: 'orderingArtistAsc',
      title: 'Artist (asc)',
      by: [{ field: 'artist.orderingName', direction: 'asc' }]
    },
    {
      name: 'orderingArtistDesc',
      title: 'Artist (desc)',
      by: [{ field: 'artist.orderingName', direction: 'desc' }]
    },
  ],
  // PREVIEW
  preview: {
    select: {
      title: 'title',
      year: 'mainEditorial.year',
      artist: 'artist.name',
      media: 'images.0'
    },
    prepare(selection) {
      const { title, year, artist, media } = selection

      return {
        title: title,
        subtitle: year ? (year + ' • ' + artist) : artist,
        media: media
      }
    }
  }
}