export const selectOptions = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5']
export const convertOption = (val, index) => ({
  value: val,
  content: val + index,
  disabled: val.includes('disabled'),
})
