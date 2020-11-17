const regexTime = /.+\s(\d){2}:(\d){2}:(\d){2}/
const taiwanTimeOffset = 8

export const getTodayTime = (offsetDay = 0): string => {
  const today = new Date()
  const taiwanTime = new Date(
    today.getUTCFullYear(),
    today.getUTCMonth(),
    today.getUTCDate() + offsetDay,
    today.getUTCHours() + taiwanTimeOffset,
    today.getUTCMinutes(),
    today.getUTCSeconds(),
  )
  const stringDate = taiwanTime.toString().match(regexTime)
  if (!stringDate) throw new Error('utils date error')
  return stringDate[0]
}
