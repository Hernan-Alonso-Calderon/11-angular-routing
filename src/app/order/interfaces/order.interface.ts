import { ICustomerResponse } from '../../customer/interfaces/customer.interface';
import { IDishResponse } from '../../dish/interfaces/dish.interface';

export interface IOrderResponse {
  id: number;
  orderDateTime: string;
  status: string;
  total: number;
  client: ICustomerResponse;
  orderDetails: IOrderDetailResponse[];
}

export interface IOrderDetailResponse {
  id: number;
  quantity: number;
  subtotal: number;
  dish: IDishResponse;
}

export interface IOrder {
  orderRequestDTO: IOrderRequestDTO;
  details: IDetail[];
}

export interface IOrderRequestDTO {
  clientId: number;
  status: string;
}

export interface IDetail {
  quantity: number;
  dishId: number;
}
