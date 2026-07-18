import { mockPublishers } from "../data/mockPublishers";
import { Publisher, PublisherStatus } from "../models/Publisher";

class PublisherService {
  private publishers: Publisher[] = [...mockPublishers];

  /**
   * Returns all publishers.
   */
  public getAll(): Publisher[] {
    return [...this.publishers];
  }

  /**
   * Returns only active publishers.
   */
  public getActive(): Publisher[] {
    return this.publishers.filter((publisher) => publisher.active);
  }

  /**
   * Returns a publisher by ID.
   */
  public getById(id: string): Publisher | undefined {
    return this.publishers.find((publisher) => publisher.id === id);
  }

  /**
   * Returns publishers matching a publisher status.
   */
  public getByStatus(status: PublisherStatus): Publisher[] {
    return this.publishers.filter(
      (publisher) => publisher.publisherStatus === status
    );
  }

  /**
   * Performs a simple search across common publisher fields.
   */
  public search(searchTerm: string): Publisher[] {
    const term = searchTerm.trim().toLowerCase();

    if (!term) {
      return this.getAll();
    }

    return this.publishers.filter((publisher) => {
      return (
        publisher.firstName.toLowerCase().includes(term) ||
        publisher.lastName.toLowerCase().includes(term) ||
        publisher.displayName.toLowerCase().includes(term) ||
        publisher.publisherStatus.toLowerCase().includes(term) ||
        publisher.email?.toLowerCase().includes(term) ||
        publisher.mobile?.toLowerCase().includes(term) ||
        publisher.phone?.toLowerCase().includes(term)
      );
    });
  }

  /**
   * Adds a new publisher.
   */
  public create(publisher: Publisher): Publisher {
    this.publishers.push(publisher);
    return publisher;
  }

  /**
   * Updates an existing publisher.
   */
  public update(updatedPublisher: Publisher): Publisher | null {
    const index = this.publishers.findIndex(
      (publisher) => publisher.id === updatedPublisher.id
    );

    if (index === -1) {
      return null;
    }

    this.publishers[index] = {
      ...updatedPublisher,
      updatedAt: new Date().toISOString(),
    };

    return this.publishers[index];
  }

  /**
   * Deletes a publisher.
   */
  public delete(id: string): boolean {
    const index = this.publishers.findIndex(
      (publisher) => publisher.id === id
    );

    if (index === -1) {
      return false;
    }

    this.publishers.splice(index, 1);
    return true;
  }

  /**
   * Returns the total number of publishers.
   */
  public count(): number {
    return this.publishers.length;
  }

  /**
   * Returns the number of active publishers.
   */
  public countActive(): number {
    return this.getActive().length;
  }
}

export const publisherService = new PublisherService();

export default publisherService;