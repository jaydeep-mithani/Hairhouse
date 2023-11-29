import moment from 'moment'

export const getTimeInterval = (startTime?: string, duration?: string) => {
  if (startTime && duration) {
    const startTimeDate = moment(`2000-01-01T${startTime}`)
    const endTimeDate = moment(startTimeDate).add(moment.duration(duration))

    const formattedStartTime = startTimeDate.format('h:mm A')
    const formattedEndTime = endTimeDate.format('h:mm A')

    return `${formattedStartTime} - ${formattedEndTime}`
  }

  return null
}

export const formatTime = (time: Date) => {
  const MIDDAY = 12
  const PAD_START = 2
  const hours = time.getHours()
  const minutes = time.getMinutes()

  const formattedHours = hours.toString().padStart(PAD_START, '0')
  const formattedMinutes = minutes.toString().padStart(PAD_START, '0')
  const ampm = hours >= MIDDAY ? ' pm' : ' am'

  return `${formattedHours}:${formattedMinutes}${ampm}`
}
