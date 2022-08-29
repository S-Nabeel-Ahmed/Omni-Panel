import moment from 'moment'
import { useEffect, useState } from 'react'
import { durationUntil, formatDuration } from 'utils/formatters'

// eslint-disable-next-line import/prefer-default-export
export const useCountDown = (
  startTime: string | number | moment.Moment,
  maximumCount?: moment.Duration,
  unix = false,
) => {
  const [duration, setDuration] = useState(moment.duration(0))
  const [time, setTime] = useState(formatDuration(duration))

  useEffect(() => {
    let timeout = -1
    let _duration = durationUntil(startTime, moment(), unix)
    if (startTime && _duration.asMilliseconds() >= 0) {
      setDuration(_duration)
      setTime(formatDuration(_duration))

      const _maximumCount = maximumCount || moment.duration(1, 'day')
      if (!_maximumCount || _duration <= _maximumCount) {
        timeout = window.setInterval(() => {
          _duration = durationUntil(startTime, moment(), unix)
          if (_duration.asMilliseconds() <= 0) {
            window.clearInterval(timeout)
            _duration = moment.duration(0)
          }

          setDuration(_duration)
          setTime(formatDuration(_duration))
        }, 1000)
      }
    }

    return () => {
      if (timeout >= 0) window.clearInterval(timeout)
    }
  }, [startTime, maximumCount, unix])

  return { duration, time }
}
