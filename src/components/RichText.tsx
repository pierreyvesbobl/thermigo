import React from 'react'
import {
  type SerializedEditorState,
} from '@payloadcms/richtext-lexical/lexical'
import {
  RichText as PayloadRichText,
} from '@payloadcms/richtext-lexical/react'

type Props = {
  content: SerializedEditorState | null | undefined
  className?: string
}

export function RichText({ content, className }: Props) {
  if (!content) return null

  return (
    <div className={className}>
      <PayloadRichText data={content} />
    </div>
  )
}
