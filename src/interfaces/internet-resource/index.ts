import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface InternetResourceInterface {
  id?: string;
  url: string;
  description?: string;
  business_id?: string;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  _count?: {};
}

export interface InternetResourceGetQueryInterface extends GetQueryInterface {
  id?: string;
  url?: string;
  description?: string;
  business_id?: string;
}
