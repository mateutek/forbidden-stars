export enum CardTypes {
    COMBAT = 'combat',
    ORDERS = 'orders',
    EVENTS = 'events',
}

export interface CardData {
  id: string;
  title: string;
  general: string;
  unit?: string;
  type?:string
}
