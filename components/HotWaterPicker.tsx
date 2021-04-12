type HotWaterPickerProps = {
  onClick: (value: number) => void
}
export const HotWaterPicker = ({ onClick }: HotWaterPickerProps) => {
  const onClickA = () => {
    onClick(150)
  }
  const onClickB = () => {
    onClick(200)
  }
  return (
    <div>
      推奨湯量(ml)
      <div>
        <button onClick={onClickA}>150ml</button>
      </div>
      <div>
        <button onClick={onClickB}>200ml</button>
      </div>
    </div>
  )
}
