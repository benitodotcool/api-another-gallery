import { UserIcon } from '@sanity/icons'
import React from 'react'

export default {
  title: 'Artist',
  name: 'annotationArtist',
  type: 'object',
  blockEditor: {
    icon: () => <UserIcon />,
    render: ({ children }) => (
      <>
        <UserIcon
          style={{
            marginLeft: '0.05em',
            marginRight: '0.1em',
            width: '0.75em'
          }}
        />
        {children}
      </>
    )
  },
  fields: [
    {
      name: 'artist',
      title: 'Artist',
      type: 'reference',
      to: [{ type: 'artist' }],
      validation: Rule => Rule.required()
    }
  ]
}