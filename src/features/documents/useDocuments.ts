import { useQuery } from "@tanstack/react-query";
import { fetchDocuments } from "./api";

export function useDocuments(page: number) {
  return useQuery({
    queryKey: ["documents", page],
    queryFn: () => fetchDocuments(page),
    placeholderData: (previousData) => previousData,
  });
}
