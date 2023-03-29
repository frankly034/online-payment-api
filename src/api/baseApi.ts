import { StatusCodes } from 'http-status-codes';
import fetch, { BodyInit, RequestInit } from 'node-fetch';
import { BadRequestError } from '../utils/ApiError';

class BaseApi {
  baseUrl: string;

  constructor(url: string) {
    this.baseUrl = url;
  }

  fetch = async (
    url: string,
    body?: BodyInit,
    args?: Record<string, string>,
    requestInit?: RequestInit
  ) => {
    try {
      const urlObj = new URL(url, this.baseUrl);

      if (args) {
        urlObj.search = new URLSearchParams(args).toString();
      }

      const requestOptions = { ...requestInit, body };

      const response = await fetch(urlObj.toString(), requestOptions);

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new BadRequestError(errorMessage);
      }

      if (response.status === StatusCodes.NO_CONTENT) {
        return;
      }

      return response.json();
    } catch (e: any) {
      throw new BadRequestError(e.message);
    }
  };

  get = <T>(
    url: string,
    args?: Record<string, any>,
    requestInit?: RequestInit
  ): Promise<T> =>
    this.fetch(url, undefined, args, { ...requestInit, method: 'GET' });

  post = <T>(
    url: string,
    body?: Record<string, any>,
    args?: Record<string, any>,
    requestInit?: RequestInit
  ): Promise<T> => {
    const bodyString = body ? JSON.stringify(body) : undefined;

    return this.fetch(url, bodyString, args, {
      ...requestInit,
      method: 'POST',
    });
  };
}

export default BaseApi;
