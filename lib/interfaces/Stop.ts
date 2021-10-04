import { Address } from './Address'
import { Order } from './Order'

export interface Stop {
  stop_id: number
  status: number
  name: string
  comment: string | null
  avatar: string | null
  telephone: string | null
  address: Address
  eta: string
  time_start: string
  time_end: string
  orders: Order[]
}
