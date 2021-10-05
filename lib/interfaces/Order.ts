export interface Order {
  order_id: string
  stream_product_id: number
  stream_type: string
  quantity: number
  size: number
  status: number
  type: number
}

export interface OrderStatusPayload {
  stopId: number
  orderId: string
  status: number
}
