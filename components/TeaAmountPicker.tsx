type TeaAmountPickerProps = {
  onClick: (value: number) => void
}

const options = [
  {
    name: '300ml',
    value: 300,
  },
  {
    name: '600ml',
    value: 600,
  },
]

export const TeaAmountPicker = ({ onClick }: TeaAmountPickerProps) => {
  return (
    <div>
      淹れたい分量(ml)
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
