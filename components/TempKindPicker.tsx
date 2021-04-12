export type TempKind = 'ice' | 'hot'

const options: { name: string; value: TempKind }[] = [
  {
    name: 'アイスティー',
    value: 'ice',
  },
  {
    name: 'ホットティー',
    value: 'hot',
  },
]

type TempKindPickerProps = {
  onClick: (value: TempKind) => void
}

export const TempKindPicker = ({ onClick }: TempKindPickerProps) => {
  return (
    <div>
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
