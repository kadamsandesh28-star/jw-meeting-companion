import { Publisher } from "../models/Publisher";

class PublisherService {
  private publishers: Publisher[] = [
    {
      id: "1",
      firstName: "John",
      lastName: "Smith",
      preferredName: "John",
      gender: "Male",
      status: "Elder",
      active: true,
      serviceGroup: "Group 1",
      phone: "082 123 4567",
      email: "john.smith@example.com",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  getAll(): Publisher[] {
    return [...this.publishers];
  }

  getById(id: string): Publisher | undefined {
    return this.publishers.find((p) => p.id === id);
  }

  add(publisher: Publisher): void {
    this.publishers.push(publisher);
  }

  update(updatedPublisher: Publisher): void {
    const index = this.publishers.findIndex(
      (p) => p.id === updatedPublisher.id
    );

    if (index !== -1) {
      this.publishers[index] = updatedPublisher;
    }
  }

  delete(id: string): void {
    this.publishers = this.publishers.filter((p) => p.id !== id);
  }

  count(): number {
    return this.publishers.length;
  }
}

export const publisherService = new PublisherService();