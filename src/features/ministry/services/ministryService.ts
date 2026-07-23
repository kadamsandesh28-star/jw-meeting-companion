import {
  MinistryFormData,
  MinistrySession,
  MinistryStatistics,
} from "../types/ministry";

const STORAGE_KEY = "jw-ministry-sessions";

class MinistryService {
  // ------------------------
  // Storage
  // ------------------------

  private load(): MinistrySession[] {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      return [];
    }

    try {
      return JSON.parse(data) as MinistrySession[];
    } catch {
      return [];
    }
  }

  private save(sessions: MinistrySession[]): void {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(sessions)
    );
  }

  // ------------------------
  // CRUD
  // ------------------------

  getSessions(): MinistrySession[] {
    return this.load().sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    );
  }

  getSession(id: string): MinistrySession | undefined {
    return this.load().find(
      (session) => session.id === id
    );
  }

  addSession(
    data: MinistryFormData
  ): MinistrySession {
    const sessions = this.load();

    const session: MinistrySession = {
      id: crypto.randomUUID(),

      ...data,

      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    sessions.unshift(session);

    this.save(sessions);

    return session;
  }

  updateSession(
    id: string,
    data: MinistryFormData
  ): MinistrySession | null {
    const sessions = this.load();

    const index = sessions.findIndex(
      (s) => s.id === id
    );

    if (index === -1) {
      return null;
    }

    sessions[index] = {
      ...sessions[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };

    this.save(sessions);

    return sessions[index];
  }

  deleteSession(id: string): void {
    const sessions = this.load().filter(
      (session) => session.id !== id
    );

    this.save(sessions);
  }

  clearSessions(): void {
    localStorage.removeItem(STORAGE_KEY);
  }

  // ------------------------
  // Statistics
  // ------------------------

  private calculateHours(
    start: string,
    end: string
  ): number {
    const startDate = new Date(
      `1970-01-01T${start}:00`
    );

    const endDate = new Date(
      `1970-01-01T${end}:00`
    );

    const diff =
      endDate.getTime() - startDate.getTime();

    return diff > 0 ? diff / 3600000 : 0;
  }

  getStatistics(): MinistryStatistics {
    const sessions = this.load();

    let totalHours = 0;

    let totalReturnVisits = 0;
    let totalBibleStudies = 0;
    let totalPlacements = 0;
    let totalVideosShown = 0;

    sessions.forEach((session) => {
      totalHours += this.calculateHours(
        session.startTime,
        session.endTime
      );

      totalReturnVisits += session.returnVisits;
      totalBibleStudies += session.bibleStudies;
      totalPlacements += session.placements;
      totalVideosShown += session.videosShown;
    });

    return {
      totalHours: Number(
        totalHours.toFixed(2)
      ),

      totalSessions: sessions.length,

      totalReturnVisits,

      totalBibleStudies,

      totalPlacements,

      totalVideosShown,
    };
  }
}

export const ministryService =
  new MinistryService();