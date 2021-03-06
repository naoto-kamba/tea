import React from 'react'

type InputAmountsState = {
  leaf: number
  hotWater: number
  tea: number
  current: 'tempKind' | 'leaf' | 'hotWater' | 'tea'
  tempKind: 'ice' | 'hot'
}

const initialInputAmountsState: InputAmountsState = {
  leaf: 2.75,
  hotWater: 150,
  tea: 300,
  current: 'tempKind',
  tempKind: 'hot',
}
type ChangePayloadValiation = {
  [K in keyof InputAmountsState]: { name: K; value: InputAmountsState[K] }
}

type ChangePayload = ChangePayloadValiation[keyof ChangePayloadValiation]

type InputAmountsAction = {
  type: 'change'
  payload: ChangePayload
}

const reducer = (
  state: InputAmountsState,
  action: InputAmountsAction
): InputAmountsState => {
  if (action.type === 'change') {
    const { name, value } = action.payload
    return { ...state, [name]: value }
  } else {
    return state
  }
}

export const useInputAmountsReducer = () => {
  return React.useReducer(reducer, initialInputAmountsState)
}
