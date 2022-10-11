import React from 'react'
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
      description: 'ie format: b. 1979 or 1979-2022',
      group: 'main',
    },
    // EDITORIAL
    // Works
    {
      name: 'works',
      title: 'Work(s)',
      // description: 'Each work need to be unique + order matters',
      description: (
        <>
          Can be empty.<br/>
          If empty: displays all the works by the artist sorted by years, then by name.<br/>
          If not empty: needs to add all the works by the artist. Each work need to be unique + order matters.
        </>
      ),
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'work'},
          ],
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.unique(),
      group: 'editorial',
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
  orderings: [
    {
      name: 'orderingNameAsc',
      title: 'Name (A-Z)',
      by: [{ field: 'orderingName', direction: 'asc' }]
    },
    {
      name: 'orderingNameDesc',
      title: 'Name (Z-A)',
      by: [{ field: 'orderingName', direction: 'desc' }]
    }
  ],
  preview: {
    select: {
      name: 'name',
      birthInfos: 'birthInfos',
      media: 'works.0.images.0'
    },
    prepare(selection) {
      const { birthInfos, name, media } = selection

      return {
        title: name,
        subtitle: birthInfos,
        media: media
      }
    }
  }
}