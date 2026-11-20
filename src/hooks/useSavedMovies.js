import { useState } from "react";

const STORAGE_KEY = "chill.saved-movies.v1";

const getErrorMessage = (error) =>
  error instanceof Error
    ? error.message
    : "Daftar Saya tidak dapat diakses di browser ini.";

const readSavedIds = () => {
  const storedValue = window.localStorage.getItem(STORAGE_KEY);
  if (storedValue === null) return [];

  let savedIds;
  try {
    savedIds = JSON.parse(storedValue);
  } catch {
    throw new Error("Data Daftar Saya rusak dan tidak dapat dibaca.");
  }

  if (
    !Array.isArray(savedIds) ||
    !savedIds.every((id) => typeof id === "string" && id.length > 0)
  ) {
    throw new Error("Format data Daftar Saya tidak valid.");
  }

  return Array.from(new Set(savedIds));
};

const getInitialState = () => {
  try {
    return { savedIds: readSavedIds(), error: "" };
  } catch (error) {
    return { savedIds: [], error: getErrorMessage(error) };
  }
};

export const useSavedMovies = () => {
  const [state, setState] = useState(getInitialState);

  const toggleSaved = (id) => {
    if (state.error) return false;
    if (typeof id !== "string" || id.length === 0) {
      setState((current) => ({
        ...current,
        error: "Judul tidak dapat ditambahkan ke Daftar Saya.",
      }));
      return false;
    }

    const savedIds = state.savedIds.includes(id)
      ? state.savedIds.filter((savedId) => savedId !== id)
      : [...state.savedIds, id];

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
      setState({ savedIds, error: "" });
      return true;
    } catch (error) {
      setState((current) => ({ ...current, error: getErrorMessage(error) }));
      return false;
    }
  };

  return {
    savedIds: state.savedIds,
    storageError: state.error,
    toggleSaved,
  };
};
