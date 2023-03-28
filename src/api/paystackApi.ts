import config from '../config/config';
import { convertObjectFromSnakeToCamelCase } from '../utils/snakeToCamelCase';
import BaseApi from './baseApi';

interface Metadata {
  email: string;
  name: string;
  amount: number;
}

export interface InitializePaymentArgs {
  email: string;
  amount: number;
  callback_url?: string;
  metadata: Metadata;
}

interface PaystackAPIResponse<T> {
  status: boolean;
  message: string;
  data: T;
}

interface InitializePaymentResponse {
  authorizationUrl: string;
  accessCode: string;
  reference: string;
}

interface VerifyPaymentResponse {
  amount: number;
  reference: string;
  status: string;
  metadata: Metadata;
}

class PaystackApi extends BaseApi {
  requestInit = {
    headers: {
      'Content-Type': 'Application/json',
      authorization: `Bearer ${config.paystackSecret}`,
    },
  };

  constructor() {
    super(config.paystackUrl as string);
  }

  initializePayment = async (paymentDetails: InitializePaymentArgs) => {
    const response = await this.post<
      PaystackAPIResponse<InitializePaymentResponse>
    >('/transaction/initialize', paymentDetails, undefined, this.requestInit);

    return convertObjectFromSnakeToCamelCase<InitializePaymentResponse>(
      response.data
    );
  };

  verifyPayment = (paymentReference: string) =>
    this.get<PaystackAPIResponse<VerifyPaymentResponse>>(
      `/transaction/verify/${paymentReference}`,
      undefined,
      this.requestInit
    );
}

const paystackApi = new PaystackApi();

export default paystackApi;
