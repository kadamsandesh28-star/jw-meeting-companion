import { Publisher } from "./publisher";

export interface CongregationStatistics {
  totalPublishers: number;
  activePublishers: number;
  elders: number;
  ministerialServants: number;
  regularPioneers: number;
  auxiliaryPioneers: number;
}

export interface CongregationState {
  publishers: Publisher[];
}