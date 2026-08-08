import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchDocuments, uploadDocumets } from "./api";

export function useDocuments(page: number) {
  return useQuery({
    queryKey: ["documents", page],
    queryFn: () => fetchDocuments(page),
    placeholderData: (previousData) => previousData,
  });
}

export function useUploadDocuments() {
  const queryClinet = useQueryClient();
  return useMutation({
    mutationFn: uploadDocumets,
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: ["documets"] });
    },
  });
}
