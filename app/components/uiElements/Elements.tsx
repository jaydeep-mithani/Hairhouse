import {
  Typography,
  Button,
  Tabs,
  TabPanel,
  Input,
  InlineMessage,
  NativeSelect,
  Option,
  Select,
} from '@overdose/components'

import { convertOption, selectOptions } from './MockData'
import MockIcon from './MockIcon'

export const Elements = () => {
  return (
    <section>
      <div className="flex  items-baseline justify-evenly gap-4 px-6 py-8">
        <Typography variant="displayXLarge" tag="h1" weight="bold">
          UI Elements
        </Typography>
        <Typography variant="displayLarge" tag="h1" weight="bold">
          UI Elements
        </Typography>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography variant="subheading" tag="h2">
          Input fields
        </Typography>
        <div
          style={{
            padding: '20px 0',
            width: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: '20px',
            marginBottom: '25px',
          }}>
          <Input onChange={() => {}} label="First Name" placeholder="Basic" />
          <Input defaultValue="Default Value" placeholder="Basic with default value" label="First Name" />
          <div>
            <Input
              validationStatus="error"
              defaultValue="Default Error "
              placeholder="Basic with default value"
              label="With Error"
            />
            <InlineMessage message="$dynamic error message" type="error" />
          </div>
          <Input readOnly placeholder="Basic read only" defaultValue="Basic read only" label="Read only" />
          <Input disabled placeholder="Basic disabled" defaultValue="Basic disabled" label="Disabled" />
          <Input onChange={() => {}} suffix={<MockIcon />} label="Field Label" placeholder="Basic" />
          <Select
            name="test-select"
            label="Test Select"
            placeholder="Please select"
            options={selectOptions}
            onChange={(e: any) => console.log(e.target)}>
            {/* {selectOptions.map((option, index) => (
              <Option key={`${option}${index}`} disabled={index === 3} value={option}>
                {option}
              </Option>
            ))} */}
          </Select>
          <NativeSelect placeholder="Please select" options={selectOptions?.map(convertOption)} />
        </div>
      </div>

      <div
        style={{
          padding: '2em',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          alignItems: 'baseline',
          gap: '1em',
        }}>
        <Button variant="solid" status="primary">
          solid primary
        </Button>

        <Button variant="solid" status="secondary">
          solid secondary
        </Button>

        <Button disabled variant="solid" status="primary">
          solid primary disabled
        </Button>

        <Button disabled variant="solid" status="secondary">
          solid secondary disabled
        </Button>

        <Button variant="link">button link</Button>
        {/* <Button shape="rounded" variant="solid" status="primary">
          <LoadingSpinner />
        </Button> */}
      </div>

      <div
        style={{
          padding: '2em',
          display: 'flex',
          flexDirection: 'column',
          gap: '1em',
        }}>
        <Button>Primary</Button>
        <Button status="secondary">Secondary</Button>
        <div
          style={{
            padding: '2em',
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
          }}>
          <Tabs defaultActiveTab="1">
            <TabPanel key="1" title={<span>Tab 1</span>}>
              <p>Content of Tab Panel 1</p>
            </TabPanel>
            <TabPanel key="2" title={<span>Tab 2</span>} disabled>
              <p>Content of Tab Panel 2</p>
            </TabPanel>
            <TabPanel key="3" title={<span>Tab 3</span>}>
              <p>Content of Tab Panel 3</p>
            </TabPanel>
          </Tabs>
        </div>
        <div
          style={{
            padding: '2em',
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
          }}>
          <Tabs defaultActiveTab="1" type="card">
            <TabPanel key="1" title={<span>Tab 1</span>}>
              <Typography tag="span" variant="body">
                Content of Tab Panel 1
              </Typography>
            </TabPanel>
            <TabPanel key="2" title={<span>Tab 2</span>}>
              <Typography tag="span" variant="body">
                Content of Tab Panel 2
              </Typography>
            </TabPanel>
            <TabPanel key="3" title={<span>Tab 3</span>} disabled>
              <Typography tag="span" variant="body">
                Content of Tab Panel 3
              </Typography>
            </TabPanel>
          </Tabs>
        </div>
        <Typography tag="p" variant="pageheading">
          Page heading
        </Typography>
        <Typography tag="p" variant="heading">
          Heading
        </Typography>
        <Typography tag="p" variant="subheading">
          Subheading
        </Typography>
        <Typography tag="p" variant="body">
          Body paragraph
        </Typography>
        <Typography tag="p" variant="caption">
          Caption
        </Typography>
        <Typography tag="p" variant="label">
          Label
        </Typography>
        <Typography tag="p" variant="button">
          Button
        </Typography>
        <Typography tag="p" variant="displayExtraLarge">
          Display extra large
        </Typography>
        <Typography tag="p" variant="displayLarge">
          Display large
        </Typography>
        <Typography tag="p" variant="displayMedium">
          Display medium
        </Typography>
        <Typography tag="p" variant="displaySmall">
          Display small
        </Typography>
        <Typography tag="p" variant="displayExtraSmall">
          Display extra small
        </Typography>
        <Typography tag="p" variant="error">
          Error
        </Typography>
      </div>
    </section>
  )
}
