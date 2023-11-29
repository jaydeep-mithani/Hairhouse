export type AccountRewardProps = {
  rewardCard?: {
    __typename?: 'ModuleRewardsCard'
    id: string
    subTitle?: string | null
    expireData?: string | null
    backgroundColor?: { __typename?: 'Color'; hex: string } | null
    background?: { __typename?: 'ModuleImage'; image: { __typename?: 'Asset'; url: string } } | null
    link?: { __typename?: 'ModuleLink'; url?: string | null; linkText?: string | null } | null
    couponCard?: string
  }
}
