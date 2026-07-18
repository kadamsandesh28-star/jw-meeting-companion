import { Publisher } from "../models/Publisher";

const STORAGE_KEY = "jw-companion-publishers";

class PublisherService {
  private publishers: Publisher[] = [];

  constructor() {
    this.load();

    // Seed initial data only if storage is empty
    if (this.publishers.length === 0) {
      this.publishers = [
        {
          id: crypto.randomUUID(),
          firstName: "John",
          lastName: "Smith",
          preferredName: "",
          gender: "Male",
          dateOfBirth: "",
          baptismDate: "",
          phone: "",
          email: "",
          address: "",
          emergencyContactName: "",
          emergencyContactPhone: "",
          serviceGroup: "",
          status: "Publisher",
          active: true,
          notes: "",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ];

      this.save();
    }
  }

  private load() {
    const json = localStorage.getItem(STORAGE_KEY);

    if (!json) {
      this.publishers = [];
      return;
    }

    try {
      this.publishers = JSON.parse(json);
    } catch {
      this.publishers = [];
    }
  }

  private save() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(this.publishers)
    );
  }

  getAll(): Publisher[] {
    return [...this.publishers];
  }

  getById(id: string): Publisher | undefined {
    return this.publishers.find((p) => p.id === id);
  }

  add(publisher: Publisher) {
    publisher.createdAt = new Date().toISOString();
    publisher.updatedAt = new Date().toISOString();

    this.publishers.push(publisher);

    this.save();
  }

  update(publisher: Publisher) {
    const index = this.publishers.findIndex(
      (p) => p.id === publisher.id
    );

    if (index === -1) return;

    publisher.updatedAt = new Date().toISOString();

    this.publishers[index] = publisher;

    this.save();
  }

  delete(id: string) {
    this.publishers = this.publishers.filter(
      (p) => p.id !== id
    );

    this.save();
  }

  count(): number {
    return this.publishers.length;
  }
}

export const publisherService = new PublisherService();