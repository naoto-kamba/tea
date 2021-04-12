import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { HotWaterPicker } from './HotWaterPicker'
import { LeafPicker } from './LeafPicker'
import { TeaAmountPicker } from './TeaAmountPicker'
import { useInputAmountsReducer } from './useInputAmountsReducer'

export const InputAmounts = () => {
  const router = useRouter()
  const [state, dispatch] = useInputAmountsReducer()
  const onChangeLeaf = (value: number) => {
    dispatch({
      type: 'change',
      payload: {
        name: 'leaf',
        value: value,
      },
    })
    dispatch({
      type: 'change',
      payload: {
        name: 'current',
        value: 'hotWater',
      },
    })
  }
  const onChangeHotWater = (value: number) => {
    dispatch({
      type: 'change',
      payload: {
        name: 'hotWater',
        value: value,
      },
    })
    dispatch({
      type: 'change',
      payload: {
        name: 'current',
        value: 'tea',
      },
    })
  }
  const onChangeTea = (value: number) => {
    dispatch({
      type: 'change',
      payload: {
        name: 'tea',
        value: value,
      },
    })
    router.push(
      `/calc-result?leaf=${state.leaf}&hotWater=${state.hotWater}&tea=${state.tea}`
    )
  }

  return (
    <div>
      {state.current === 'leaf' && <LeafPicker onClick={onChangeLeaf} />}
      {state.current === 'hotWater' && (
        <HotWaterPicker onClick={onChangeHotWater} />
      )}
      {state.current === 'tea' && <TeaAmountPicker onClick={onChangeTea} />}
    </div>
  )
}
