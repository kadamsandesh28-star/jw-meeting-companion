import { Publisher } from "../types/publisher";
import { samplePublishers } from "../data/samplePublishers";

class PublisherService {
  private publishers: Publisher[] = [...samplePublishers];

  getAll(): Publisher[] {
    return this.publishers;
  }

  getById(id: string): Publisher | undefined {
    return this.publishers.find((p) => p.id === id);
  }

  add(publisher: Publisher) {
    this.publishers.push(publisher);
  }

  update(updated: Publisher) {
    this.publishers = this.publishers.map((p) =>
      p.id === updated.id ? updated : p
    );
  }

  delete(id: string) {
    this.publishers = this.publishers.filter((p) => p.id !== id);
  }
}

export const publisherService = new PublisherService();