import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { useInputAmountsReducer } from './useInputAmountsReducer'

export const InputAmounts = () => {
  const router = useRouter()
  const [state, dispatch] = useInputAmountsReducer()
  const onChangeLeaf = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: 'change',
      payload: {
        name: 'leaf',
        value: Number(event.target.value),
      },
    })
  }
  const onChangeHotWater = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: 'change',
      payload: {
        name: 'hotWater',
        value: Number(event.target.value),
      },
    })
  }
  const onChangeTea = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: 'change',
      payload: {
        name: 'tea',
        value: Number(event.target.value),
      },
    })
  }
  const onDeterminationClick = () => {
    router.push(
      `/calc-result?leaf=${state.leaf}&hotWater=${state.hotWater}&tea=${state.tea}`
    )
  }
  return (
    <div>
      <div>
        <label>茶葉</label>
        <select value={state.leaf} onChange={onChangeLeaf}>
          <option value={2.75}>2.5g~3.0g</option>
          <option value={3.25}>3.0g~3.5g</option>
        </select>
      </div>
      <div>
        <label>お湯</label>
        <select value={state.hotWater} onChange={onChangeHotWater}>
          <option value={150}>150ml</option>
          <option value={200}>200ml</option>
        </select>
      </div>
      <div>
        <label>淹れたい分量</label>
        <select value={state.tea} onChange={onChangeTea}>
          <option value={300}>300ml(2杯)</option>
          <option value={600}>600ml(4杯)</option>
        </select>
      </div>
      <button onClick={onDeterminationClick}>決定</button>
    </div>
  )
}
