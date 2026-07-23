import { useMemo, useState } from "react";
import { publisherService } from "../services/publisherService";

export function usePublishers() {
  const [publishers] = useState(publisherService.getAll());
  const [search, setSearch] = useState("");

  const filteredPublishers = useMemo(() => {
    return publishers.filter((publisher) => {
      const fullName =
        `${publisher.firstName} ${publisher.lastName}`.toLowerCase();

      return fullName.includes(search.toLowerCase());
    });
  }, [publishers, search]);

  return {
    publishers: filteredPublishers,
    search,
    setSearch,
  };
}