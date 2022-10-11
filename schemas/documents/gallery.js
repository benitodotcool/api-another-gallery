import { PinIcon } from '@sanity/icons'

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
  name: 'gallery',
	title: 'Gallery',
  type: 'document',
  icon: PinIcon,
  groups: GROUPS,
  fields: [
    // MAIN
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
      group: 'main',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
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
        source: 'city'
      }
    },
    {
      name: 'instagramLink',
      title: 'Instagram Link',
      type: 'url',
      group: 'main'
    },
    {
      name: 'emailAddress',
      title: 'Email Address',
      type: 'url',
      group: 'main'
    },
    // EDITORIAL
    {
      name: 'body',
      title: 'body',
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
  ]
}