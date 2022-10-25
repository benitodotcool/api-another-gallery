import { EarthGlobeIcon } from '@sanity/icons'
import React from 'react'

export default {
  title: 'External Link',
  name: 'annotationLinkExternal',
  type: 'object',
  blockEditor: {
    icon: () => <EarthGlobeIcon />,
    render: ({ children }) => (
      <span>
        <EarthGlobeIcon
          style={{
            marginLeft: '0.05em',
            marginRight: '0.1em',
            width: '0.75em'
          }}
        />
        {children}
      </span>
    )
  },
  fields: [
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: Rule => Rule.required().uri({ scheme: ['http', 'https'] })
    },
    {
      title: 'Open in a new window?',
      name: 'newWindow',
      type: 'boolean',
      initialValue: true
    }
  ]
}