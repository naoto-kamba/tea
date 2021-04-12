type LeafPickerProps = {
  onClick: (value: number) => void
}

const options = [
  {
    name: '2.75g',
    value: 2.75,
  },
  {
    name: '3.00g',
    value: 3,
  },
]

export const LeafPicker = ({ onClick }: LeafPickerProps) => {
  return (
    <div>
      推奨茶葉量(g)
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
