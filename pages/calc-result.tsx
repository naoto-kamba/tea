import { Layout } from '../components/layout/Layout'
import { useRouter } from 'next/dist/client/router'

const IceTeaResult = ({
  hotWater,
  leaf,
  tea,
  ice,
}: {
  hotWater: number
  leaf: number
  tea: number
  ice: number
}) => {
  return (
    <div>
      <div>アイスティー</div>
      <div>完成: {tea} ml</div>
      <div>茶葉: {leaf} g</div>
      <div>湯: {hotWater} ml</div>
      <div>氷: {ice} g </div>
    </div>
  )
}

const HotTeaResult = ({
  hotWater,
  leaf,
  tea,
}: {
  hotWater: number
  leaf: number
  tea: number
}) => {
  return (
    <div>
      <div>ホットティー</div>
      <div>完成: {tea} ml</div>
      <div>茶葉: {leaf} g</div>
      <div>湯: {hotWater} ml</div>
    </div>
  )
}

const CalcResult = () => {
  const router = useRouter()
  const tempKind = router.query.tempKind as string
  const leafUnit = Number(router.query.leaf)
  const hotWaterUnit = Number(router.query.hotWater)
  const tea = Number(router.query.tea)
  const ratio = tea / hotWaterUnit

  const leaf = leafUnit * ratio

  const hotTeaHotWater = hotWaterUnit * ratio

  const iceTeaHotWater = hotWaterUnit * (3 / 5) * ratio
  const ice = hotWaterUnit * (2 / 5) * ratio

  return (
    <Layout>
      {tempKind === 'ice' ? (
        <IceTeaResult
          leaf={leaf}
          hotWater={iceTeaHotWater}
          tea={tea}
          ice={ice}
        />
      ) : (
        <HotTeaResult leaf={leaf} hotWater={hotTeaHotWater} tea={tea} />
      )}
    </Layout>
  )
}

export default CalcResult
