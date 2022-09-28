import { EnvelopeIcon } from '@sanity/icons'
import React from 'react'

export default {
  title: 'Email link',
  name: 'annotationLinkEmail',
  type: 'object',
  blockEditor: {
    icon: () => <EnvelopeIcon />,
    render: ({ children }) => (
      <span>
        <EnvelopeIcon
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
    // Email
    {
      title: 'Email',
      name: 'email',
      type: 'email'
    }
  ]
}
