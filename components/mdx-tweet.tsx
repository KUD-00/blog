'use client'

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

interface TweetProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string
}

export function MdxTweet({
  href
}: TweetProps) {
  return (
    <TwitterTweetEmbed tweetId={"1358199505280262150"} />
  )
}
