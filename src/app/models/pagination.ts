import {ICertificate} from './certificats'


export interface IPagination {
          pageIndex: number;
          pageSize: number;
          count: number;
          data: ICertificate[];
          totalItems: number;
        }