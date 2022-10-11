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
    // Title
    {
      name: 'title',
      title: 'Title',
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
    // Instagram
    {
      name: 'instagramLink',
      title: 'Instagram Link',
      type: 'url',
      group: 'main'
    },
    // Email
    {
      name: 'emailAddress',
      title: 'Email Address',
      type: 'string',
      group: 'main'
    },
    // Geopoint
    {
      name: 'geopoint',
      title: 'Geopoint',
      type: 'geopoint',
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
  ],
  // PREVIEW
  preview: {
    select: {
      title: 'city',
      emailAdress: 'emailAddress'
    },
    prepare(selection) {
      const { title, emailAdress } = selection

      return {
        title: title,
        subtitle: emailAdress
      }
    }
  }
}