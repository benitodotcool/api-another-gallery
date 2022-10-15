import React from 'react'
import { CalendarIcon } from '@sanity/icons'

const GROUPS = [
  {
    default: true,
    name: 'main',
    title: 'Main'
  },
  {
    name: 'cover',
    title: 'Cover'
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
          // fields: [
          //   {
          //     name: 'caption',
          //     title: 'Caption',
          //     type: 'string',
          //     options: {
          //       isHighlighted: true // <-- make this field easily accessible
          //     }
          //   },
          // ]
        },
      ],
      options: {
        layout: 'grid',
      },
      description: 'Order matters',
      group: 'main'
    },
    // COVER
    // Cover image
    // {
    //   name: 'coverImage',
    //   title: 'Cover Image',
    //   type: 'image',
    //   // options: {
    //   //   hotspot: true // <-- Defaults to false
    //   // },
    //   validation: Rule => Rule.required(),
    //   fields: [
    //     {
    //       name: 'work',
    //       title: 'Work',
    //       type: 'reference',
    //       to: [{type: 'work'}],
    //       options: {
    //         isHighlighted: true
    //       },
    //       validation: Rule => Rule.required()
    //     }
    //   ],
    //   group: 'cover'
    // },
    {
      name: 'coverImages',
      title: 'Cover Images',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true
      },
      fields: [
        {
          name: 'work',
          title: 'Work',
          type: 'reference',
          to: [{type: 'work'}],
          options: {
            isHighlighted: true
          },
          description: 'Max 4',
          validation: Rule => Rule.required().max(4)
        }
      ],
      description: (
        <>
          <p style={{ marginBlockStart: 0, marginBlockEnd: 0 }}>For each work, displays the <code>Cover Image</code> in a slideshow at <code>another.gallery/shows</code></p>
        </>
      ),
      group: 'cover'
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
      name: 'pressRelease',
      title: 'Press Release',
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
    },
    {
      name: 'orderingIsPublishedAsc',
      title: 'isPublished (No→Yes)',
      by: [{ field: 'isPublished', direction: 'asc' }]
    },
    {
      name: 'orderingIsPublishedDesc',
      title: 'isPublished (Yes→No)',
      by: [{ field: 'isPublished', direction: 'desc' }]
    }
  ],
  // PREVIEW
  preview: {
    select: {
      title: 'title',
      startingDate: 'dates.starting',
      endingDate: 'dates.ending',
      published: 'isPublished',
      media: 'images.0'
    },
    prepare(selection) {
      const { title, startingDate, endingDate, media, published } = selection

      return {
        title: title,
        subtitle: `${startingDate}${endingDate && ' - ' + endingDate}`,
        media: published ? (
          media
        ) : (
          <span style={{
            backgroundColor: '#cbd5e1',
            borderRadius: '3px',
            width: '100%',
            height: '100%',
            color: 'white',
            display: 'grid',
            placeItems: 'center',
            zIndex: 5
          }}>
            <svg width="26px" height="26px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                    <g transform="translate(2.000000, 2.000000)" stroke="#fff" strokeWidth="1.5">
                        <path d="M9.4923,0.789 L5.7533,0.789 C2.6783,0.789 0.7503,2.966 0.7503,6.048 L0.7503,14.362 C0.7503,17.444 2.6693,19.621 5.7533,19.621 L14.5773,19.621 C17.6623,19.621 19.5813,17.444 19.5813,14.362 L19.5813,10.334" id="Stroke-1"></path>
                        <path d="M6.8278,8.9209 L14.3008,1.4479 C15.2318,0.5179 16.7408,0.5179 17.6718,1.4479 L18.8888,2.6649 C19.8198,3.5959 19.8198,5.1059 18.8888,6.0359 L11.3798,13.5449 C10.9728,13.9519 10.4208,14.1809 9.8448,14.1809 L6.0988,14.1809 L6.1928,10.4009 C6.2068,9.8449 6.4338,9.3149 6.8278,8.9209 Z" id="Stroke-3"></path>
                        <line x1="13.1652" y1="2.6025" x2="17.7312" y2="7.1685" id="Stroke-5"></line>
                    </g>
                </g>
            </svg>
          </span>
        ),
      }
    }
  }
}