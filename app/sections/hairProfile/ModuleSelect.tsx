import { Typography, Select, Option } from '@overdose/components'

export const ModuleSelect = ({
  title,
  name,
  placeholder,
  arr,
}: {
  title: string
  name: string
  placeholder: string
  arr: string[]
}) => {
  return (
    <div className="mb-10">
      {title && (
        <Typography
          tag="p"
          variant="bodyLarge"
          theme={{
            root: 'mb-4 md:mb-3 font-medium',
          }}>
          {title}
        </Typography>
      )}
      {arr && (
        <Select name={name} placeholder={placeholder}>
          {arr.map((item, index) => (
            <Option key={index} value={item} label={item} />
          ))}
        </Select>
      )}
    </div>
  )
}
