import { useQuery } from "@tanstack/react-query";
import { fetchCategories, fetchFilterMenu, fetchMenu, fetchMenuById } from "../../../api/menuApi";

export const useMenuById = (itemId) => {
  return useQuery({
    queryKey: ['menu', itemId],
    queryFn: () => fetchMenuById(itemId),
    enabled: !!itemId
  });
};

export const useCategories = () => useQuery({
  queryKey: ['categories'],
  queryFn: () => fetchCategories()
});

export const useFilteredMenu = (filter) => useQuery({
  queryKey: ['dish', filter],
  queryFn: () => fetchFilterMenu(filter)
});
// for admin
export const useMenu = () => useQuery({
  queryKey: ['menu'],
  queryFn: () => fetchMenu()
});