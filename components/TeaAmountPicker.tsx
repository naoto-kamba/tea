type TeaAmountPickerProps = {
  onClick: (value: number) => void
}
export const TeaAmountPicker = ({ onClick }: TeaAmountPickerProps) => {
  const onClickA = () => {
    onClick(300)
  }
  const onClickB = () => {
    onClick(600)
  }
  return (
    <div>
      淹れたい分量(ml)
      <div>
        <button onClick={onClickA}>300ml</button>
      </div>
      <div>
        <button onClick={onClickB}>600ml</button>
      </div>
    </div>
  )
}
