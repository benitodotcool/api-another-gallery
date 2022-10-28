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
    // Is Published?
    {
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      description: 'Required + set to Published if this show is visible on another.gallery/artists/…',
      validation: Rule => Rule.required(),
      initialValue: true,
      group: 'main'
    },
    // Name
    {
      name: 'name',
      title: 'Full name',
      type: 'string',
      description: 'Required',
      validation: Rule => Rule.required(),
      group: 'main',
    },
    // Ordering name
    {
      name: 'orderingName',
      title: 'Ordering name',
      type: 'string',
      description: 'Required',
      validation: Rule => Rule.required(),
      group: 'main',
    },
    // Slug
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Required',
      validation: Rule => Rule.required(),
      group: 'main',
      options: {
        source: 'name'
      }
    },
    // Birth info(s)
    {
      name: 'birthInfos',
      title: 'Birth info(s)',
      type: 'string',
      description: 'ie format: b.1979 or 1979-2022',
      group: 'main',
    },
    // Country
    {
      name: 'country',
      title: 'Country',
      type: 'reference',
      to: [{type: 'country'}],
      group: 'main',
      validation: Rule => Rule.required(),
      description: 'Required + where the artist come from'
    },
    // EDITORIAL
    // Works
    // {
    //   name: 'works',
    //   title: 'Work(s)',
    //   // description: 'Each work need to be unique + order matters',
    //   description: (
    //     <>
    //       Can be empty.<br/>
    //       If empty: displays all the works by the artist sorted by years, then by name.<br/>
    //       If not empty: needs to add all the works by the artist. Each work need to be unique + order matters.
    //     </>
    //   ),
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: [
    //         {type: 'work'},
    //       ],
    //       validation: Rule => Rule.required()
    //     }
    //   ],
    //   validation: Rule => Rule.unique(),
    //   group: 'editorial',
    // },
    // Body
    {
      name: 'body',
      title: 'Press Release',
      type: 'body',
      group: 'editorial'
    },
    // SEO
    {
      name: 'isSeoFeatured',
      title: 'SEO Featured',
      type: 'boolean',
      description: (
        <>
          Set to SEO Featured if this artist needs to reference
          <code>another.gallery/artists</code><br/>
          Only 9 artists will reference this page (SEO size obligation)
        </>
      ),
      initialValue: false,
      group: 'seo'
    },
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
      title: 'Name (A→Z)',
      by: [{ field: 'orderingName', direction: 'asc' }]
    },
    {
      name: 'orderingNameDesc',
      title: 'Name (Z→A)',
      by: [{ field: 'orderingName', direction: 'desc' }]
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
  preview: {
    select: {
      name: 'name',
      birthInfos: 'birthInfos',
      country: 'country.abreviation',
      published: 'isPublished',
      media: 'works.0.images.0',
      isSeoFeatured: 'isSeoFeatured'
    },
    prepare(selection) {
      const { birthInfos, name, country, published, media, isSeoFeatured } = selection

      return {
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
        title: name,
        subtitle: `${isSeoFeatured ? 'SEO Featured/' : ''}${birthInfos ? birthInfos + '/': ''}${country}`
      }
    }
  }
}