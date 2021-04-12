type HotWaterPickerProps = {
  onClick: (value: number) => void
}

const options = [
  {
    name: '150ml',
    value: 150,
  },
  {
    name: '200ml',
    value: 200,
  },
]

export const HotWaterPicker = ({ onClick }: HotWaterPickerProps) => {
  return (
    <div>
      推奨湯量(ml)
      {options.map((o) => {
        const onClickL = () => {
          onClick(o.value)
        }
        return (
          <div>
            <button onClick={onClickL}>{o.name}</button>
          </div>
        )
      })}
    </div>
  )
}
