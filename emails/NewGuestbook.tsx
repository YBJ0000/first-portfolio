import * as React from 'react'
import ReactMarkdown from 'react-markdown'

import { parseDisplayName } from '../lib/string'
import { Button, Heading, Hr, Img, Section, Text } from './_components'
import Layout from './Layout'

const NewGuestbookEmail = ({
  link = 'https://www.ybj.au/guestbook',
  userFirstName = 'Bingjia',
  userLastName = 'Yang',
  userImageUrl = 'https://www.ybj.au/icon.png',
  commentContent = '*Test comment*\n- Wow wtf\n- Cool',
}: {
  link?: string | null
  userFirstName?: string | null
  userLastName?: string | null
  userImageUrl?: string | null
  commentContent?: string | null
}) => {
  const user = parseDisplayName({
    firstName: userFirstName,
    lastName: userLastName,
  })
  const title = `New message on the guestbook!`

  return (
    <Layout previewText={title}>
      <Heading>{title}</Heading>
      <Section className="mt-[24px]">
        <Text className="text-[14px] leading-[24px] text-black">
          {userImageUrl && (
            <Img
              src={userImageUrl}
              alt="Guest avatar"
              width="24"
              height="24"
              className="rounded-full"
            />
          )}
        </Text>
        <Text className="text-[14px] leading-[24px] text-black">
          <b>{user}</b>&nbsp;left a message on the guestbook:
        </Text>
      </Section>

      <Section className="px-2 text-[14px] leading-[16px] text-zinc-700">
        {commentContent && <ReactMarkdown>{commentContent}</ReactMarkdown>}
      </Section>

      <Hr className="mx-0 my-[26px] h-px w-full bg-zinc-100" />

      <Section className="mb-[32px] mt-[32px] text-center">
        {link && (
          <Button
            pX={20}
            pY={12}
            className="rounded-xl bg-zinc-900 text-center text-[12px] font-semibold text-white no-underline"
            href={link}
          >
            View message
          </Button>
        )}
      </Section>
    </Layout>
  )
}

export default NewGuestbookEmail
