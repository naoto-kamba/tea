import React from 'react'
type Amounts = {
  leaf: number
  hotWater: number
  tea: number
}

export const InputAmounts = () => {
  const [amounts, setAmounts] = React.useState<Amounts>({
    leaf: 2.75,
    hotWater: 150,
    tea: 300,
  })
  const onChangeLeaf = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAmounts({
      ...amounts,
      leaf: Number(event.target.value),
    })
  }
  const onChangeHotWater = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAmounts({
      ...amounts,
      hotWater: Number(event.target.value),
    })
  }
  const onChangeTea = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAmounts({
      ...amounts,
      tea: Number(event.target.value),
    })
  }
  return (
    <div>
      <div>
        <label>茶葉</label>
        <select value={amounts.leaf} onChange={onChangeLeaf}>
          <option value={2.75}>2.5g~3.0g</option>
          <option value={3.25}>3.0g~3.5g</option>
        </select>
      </div>
      <div>
        <label>お湯</label>
        <select value={amounts.hotWater} onChange={onChangeHotWater}>
          <option value={150}>150ml</option>
          <option value={200}>200ml</option>
        </select>
      </div>
      <div>
        <label>淹れたい分量</label>
        <select value={amounts.tea} onChange={onChangeTea}>
          <option value={300}>300ml(2杯)</option>
          <option value={600}>600ml(4杯)</option>
        </select>
      </div>
      <button>決定</button>
    </div>
  )
}
