import { Button, Typography } from '@overdose/components'
import clsx from 'clsx'

import { mock } from './HairProfile.mock'
import styles from './HairProfile.module.css'
import { HairProfileProps } from './HairProfile.types'
import { ModuleCheckBox } from './ModuleCheckBox'
import { ModuleRadioBtn } from './ModuleRadioBtn'
import { ModuleSelect } from './ModuleSelect'
import { ModuleTextarea } from './ModuleTextarea'

export const HairProfile = ({ hairProfile = mock.hairProfile }: HairProfileProps) => {
  return (
    <div className="w-full md:max-w-[678px] mt-8 lg:mt-0">
      <Typography tag="p" variant="displayLarge" theme={{ root: 'mb-6 md:mb-10' }}>
        Hair profile
      </Typography>
      <Typography tag="p" variant="bodyLarge" theme={{ root: 'mb-1 font-medium' }}>
        Tell us about your hair
      </Typography>
      <Typography variant="bodyLarge" tag="p" theme={{ root: clsx('font-[350]', styles.text) }}>
        Your hair is important to us, just as important as it is to you! To provide you with the best hair and beauty
        solutions, we’d like to know about you and your hair. Find out more about how we use your information by reading
        our{' '}
        <Button variant="link" href="/privacy-policy" theme={{ root: clsx(styles.link, 'underline-offset-2') }}>
          <Typography variant="bodyLarge" tag="span" theme={{ root: clsx('font-[350]', styles.text) }}>
            Privacy Policy
          </Typography>
        </Button>
        .
      </Typography>
      <div className={clsx('my-10 w-full h-px', styles.line)} />

      <form>
        <ModuleCheckBox
          title="What is your current hair colour?"
          subTitle="Tick any that apply to you."
          arr={['Brown', 'Red', 'Grey', 'Blonde', 'Black', 'Other']}
        />
        <ModuleCheckBox
          title="What are your current hair concerns?"
          subTitle="Tick any that apply to you."
          arr={['Condition', 'Style', 'Scalp', 'Length', 'Colour', 'Volume']}
        />
        <ModuleCheckBox
          title="Which of these services have you had in the past 6 months?"
          subTitle="Tick any that apply to you."
          arr={[
            'Supermarket colour',
            'Keratin',
            'Extensions',
            'Salon colour',
            'Toner',
            'Balayage',
            'Highlights',
            'Lightener or bleach',
            'Perming',
            'Other',
          ]}
        />
        <ModuleRadioBtn
          title="Do you have any allergies?"
          subTitle="Includes drug, food, skin, latex, asthma, animal, etc."
          arr={['Yes', 'No']}
          groupName="allergies"
        />
        <ModuleSelect
          title="On average, how often do you visit a hair salon?"
          placeholder="Please select"
          name="visitFrequency"
          arr={['Often', 'Not Often']}
        />
        <ModuleRadioBtn
          title="Have you recently had a restyle or colour change?"
          subTitle="With the last 3 months."
          arr={['Yes', 'No']}
          groupName="hairChanges"
        />
        <ModuleTextarea
          title="What is the best /worst thing you’ve done to your hair?"
          placeholder="Type your answer here"
          tag="Max character count: 250"
          name="aboutHair"
        />
        <ModuleCheckBox
          title="What is your at home hair care routine?"
          subTitle="Tick all that apply."
          arr={[
            'Shampoo',
            'Treatments',
            'Natural dry',
            'Conditioner',
            'Blow dry',
            'Straightener',
            'Heat protectant',
            'Brush',
            'Blast dry',
            'Curler',
            'Other',
          ]}
        />
        <ModuleSelect
          title="On average, how often do you style your hair at home?"
          placeholder="Please select"
          name="styleFrequency"
          arr={['Often', 'Not Often']}
        />
        <ModuleTextarea
          title="What styling products do you use?"
          subTitle="Include gels, hairspray, dry shampoo etc."
          placeholder="Type your answer here"
          tag="Max character count: 250"
          name="aboutStyling"
        />
        <ModuleCheckBox
          title="What is your at home hair styling routine?"
          subTitle="Tick all that apply."
          arr={[
            'Blow dry with brush',
            'Hot brush',
            'Gel',
            'Hair straightener',
            'Hair spray',
            'Mousse',
            'Hair curler',
            'Dry shampoo',
            'Balm',
            'Blast dry',
            'Serum',
            'Nourishing oil',
            'Brush',
            'Curl enhancer',
          ]}
        />
        <ModuleRadioBtn
          title="Do you feel you have the right home products to achieve great results?"
          arr={['Yes', 'No']}
          groupName="results"
        />
        <ModuleTextarea
          title="Do you have additional information for your stylist at your next salon appointment?"
          subTitle="Include additional concerns, requests, questions, etc."
          placeholder="Type your answer here"
          tag="Max character count: 250"
          name="additionalInfo"
        />
        <Button status="primary" theme={{ root: 'w-full md:w-[250px]' }}>
          Save changes
        </Button>
      </form>
    </div>
  )
}
