import { isEmpty, set, unset, clone } from 'lodash'
import validator from 'validator'
import { parseUnits } from '@ethersproject/units'
import moment, { isMoment } from 'moment'
import Web3 from 'web3'
import { toBool } from './converters'

export const validateSingle = <T>(value: any, type: string, mandatory = true, extra: any = undefined) => {
  const { newValue, newErrors } = validate<{ value?: T }>({}, {}, value, 'value', type, mandatory, extra)
  return { value: newValue?.value, error: newErrors?.value }
}

const validate = <T>(
  initial: T,
  errors: { [key: string]: string },
  value: any,
  name: string,
  type: string,
  mandatory = true,
  extra: any = undefined,
) => {
  const newErrors = clone(errors)
  unset(newErrors, name)

  const newValue: Partial<T> = { ...initial }

  if (type === 'boolean') {
    set(newValue, name, toBool(value))
  } else if (!isEmpty(value)) {
    if (type === 'BigNumber' || type === 'number') {
      const floatValue = parseFloat(value)
      if (!Number.isNaN(floatValue) && Number.isFinite(floatValue)) {
        if (floatValue < 0) {
          set(newErrors, name, 'This number should be positive')
        } else {
          set(
            newValue,
            name,
            type === 'BigNumber' ? parseUnits(value, extra && Number.isInteger(extra) ? extra : 18) : floatValue,
          )
          if (floatValue === 0) set(newErrors, name, 'This field is required')
        }
      } else {
        set(newErrors, name, 'Please fill in a correct number')
      }
    } else if (type === 'address') {
      if (!Web3.utils.isAddress(value)) {
        set(newErrors, name, 'Please fill in a correct address')
      } else {
        set(newValue, name, value)
      }
    } else if (type === 'moment') {
      if (isMoment(value)) {
        set(newValue, name, value)
      } else if (typeof value === 'string') {
        const momentValue = moment(value, true)
        if (momentValue.isValid()) set(newValue, name, momentValue)
        else set(newErrors, name, 'Please use a correct format')
      } else {
        set(newErrors, name, 'Please use a correct format')
      }
    } else if (type === 'date') {
      if (isMoment(value)) {
        set(newValue, name, value.toDate())
      } else {
        set(newErrors, name, 'Please use a correct format')
      }
    } else if (type === 'email') {
      if (validator.isEmail(value)) {
        set(newValue, name, value)
      } else {
        set(newErrors, name, 'invalid email')
      }
    } else {
      set(newValue, name, value)
    }
  } else if (mandatory) {
    set(newErrors, name, 'This field is required')
    set(newValue, name, null)
    if (name === 'cellNo') {
      set(newErrors, name, null)
    }
  }

  return { newValue, newErrors }
}

export default validate
