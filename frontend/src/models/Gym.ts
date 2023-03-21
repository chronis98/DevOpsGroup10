import type Address from '@/models/Address'

type OverviewGym = {
  id: number,
  name: string,
  imagePath: string,
  address: Address
}

export type DetailGym = {
  id: number,
  name: string,
  imagePath: string,
  equipments: {
    id: number,
    name: string,
    description: string
    imagePath: string,
    reportsCount: number,
    status: null|0|1
  }[]
}

export default OverviewGym;
