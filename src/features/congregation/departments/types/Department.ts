export interface Department {
  id: string;

  name: string;

  description?: string;

  overseerPublisherId?: string;

  assistantPublisherId?: string;

  keyMemberPublisherIds: string[];

  notes?: string;

  active: boolean;

  createdAt: string;

  updatedAt: string;
}