export interface CongregationSettings {
  congregationName: string;
  kingdomHall: string;
  circuit: string;
  language: string;

  scripture: {
    text: string;
    reference: string;
  };
}