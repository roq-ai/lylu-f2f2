import axios from 'axios';
import queryString from 'query-string';
import { InternetResourceInterface, InternetResourceGetQueryInterface } from 'interfaces/internet-resource';
import { GetQueryInterface } from '../../interfaces';

export const getInternetResources = async (query?: InternetResourceGetQueryInterface) => {
  const response = await axios.get(`/api/internet-resources${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createInternetResource = async (internetResource: InternetResourceInterface) => {
  const response = await axios.post('/api/internet-resources', internetResource);
  return response.data;
};

export const updateInternetResourceById = async (id: string, internetResource: InternetResourceInterface) => {
  const response = await axios.put(`/api/internet-resources/${id}`, internetResource);
  return response.data;
};

export const getInternetResourceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/internet-resources/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteInternetResourceById = async (id: string) => {
  const response = await axios.delete(`/api/internet-resources/${id}`);
  return response.data;
};
