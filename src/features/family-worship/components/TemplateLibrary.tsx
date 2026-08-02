import { useMemo, useState } from "react";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import {
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";

import { useTemplateFavorites } from "../hooks/useTemplateFavorites";
import { WorshipTemplate } from "../models/WorshipTemplate";

import TemplateCategoryFilter from "./TemplateCategoryFilter";
import TemplateGrid from "./TemplateGrid";

interface Props {
  templates: WorshipTemplate[];
  onSelect?: (
    template: WorshipTemplate
  ) => void;
}

export default function TemplateLibrary({
  templates,
  onSelect,
}: Props) {
  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const { favorites } =
    useTemplateFavorites();

  const categories = useMemo(
    () => [
      "All",
      ...new Set(
        templates.map(
          (t) => t.category
        )
      ),
    ],
    [templates]
  );

  const filteredTemplates =
    useMemo(() => {
      const query =
        search.trim().toLowerCase();

      return templates
        .filter((template) => {
          const matchesSearch =
            template.name
              .toLowerCase()
              .includes(query) ||
            template.description
              .toLowerCase()
              .includes(query) ||
            template.category
              .toLowerCase()
              .includes(query);

          const matchesCategory =
            category === "All" ||
            template.category ===
              category;

          return (
            matchesSearch &&
            matchesCategory
          );
        })
        .sort((a, b) => {
          const aFavorite =
            favorites.includes(a.id);

          const bFavorite =
            favorites.includes(b.id);

          if (
            aFavorite === bFavorite
          ) {
            return a.name.localeCompare(
              b.name
            );
          }

          return aFavorite ? -1 : 1;
        });
    }, [
      templates,
      search,
      category,
      favorites,
    ]);

  return (
    <Stack spacing={3}>
      <TextField
        fullWidth
        placeholder="Search templates..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchRoundedIcon />
            </InputAdornment>
          ),
        }}
      />

      <TemplateCategoryFilter
        categories={categories}
        selected={category}
        onSelect={setCategory}
      />

      <TemplateGrid
        templates={filteredTemplates}
        onSelect={onSelect}
      />
    </Stack>
  );
}