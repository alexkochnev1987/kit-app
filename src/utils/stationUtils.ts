import { Station } from "@/types/station";
import stationsData from "@/data/stations.json";

/**
 * Utility functions for working with station data
 */

/**
 * Get all available stations
 */
export const getAllStations = (): Station[] => {
  return stationsData as Station[];
};

/**
 * Get a specific station by ID
 */
export const getStationById = (id: string | number): Station | undefined => {
  const numericId = typeof id === "string" ? parseInt(id, 10) : id;
  return stationsData.find((station) => station.id === numericId) as
    | Station
    | undefined;
};
