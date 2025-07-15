import * as React from 'react'

import { emailConfig } from '../config/email'
import { Button, Heading, Hr, Img, Link, Section, Text } from './_components'
import Layout from './Layout'

const ConfirmSubscriptionEmail = ({ link = 'link.com/confirm?fake-token' }) => {
  const previewText = `Confirm your subscription to Bingjia Yang's updates?`

  return (
    <Layout previewText={previewText}>
      <Section className="mt-[24px]">
        <Img
          src={`${emailConfig.baseUrl}/subscription-email-header.jpg`}
          width="250"
          height="129.28"
          alt="Bingjia Yang"
          className="mx-auto my-0"
        />
      </Section>
      <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-bold text-black">
        Subscribe to Bingjia Yang's Updates
      </Heading>
      <Text className="text-[14px] leading-[24px] text-black">Hello!</Text>
      <Text className="text-[14px] leading-[24px] text-black">
        To confirm your subscription, please click the button below. Thank you for your support! 🙏
      </Text>
      <Section className="mb-[32px] mt-[32px] text-center">
        <Button
          pX={20}
          pY={12}
          className="rounded-xl bg-zinc-900 text-center text-[12px] font-semibold text-white no-underline"
          href={link}
        >
          Confirm Subscription
        </Button>
      </Section>
      <Text className="text-[14px] leading-[24px] text-black">
        Or copy and paste the following link into your browser:
        <br />
        <Link href={link} className="text-blue-600 no-underline">
          {link}
        </Link>
      </Text>
      <Hr className="mx-0 my-[26px] h-px w-full bg-zinc-100" />
      <Text className="text-[12px] leading-[24px] text-[#666666]">
        If you did not request this, you can safely ignore this email. If you have any questions, feel free to contact me.
      </Text>
    </Layout>
  )
}

export default ConfirmSubscriptionEmail
