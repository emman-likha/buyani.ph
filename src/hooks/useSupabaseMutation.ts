import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

type MutationType = 'insert' | 'update' | 'delete';

interface UseSupabaseMutationOptions<T>
  extends Omit<UseMutationOptions<T, Error, any>, 'mutationFn'> {
  table: string;
  type: MutationType;
}

export function useSupabaseMutation<T = any>({
  table,
  type,
  ...options
}: UseSupabaseMutationOptions<T>) {
  return useMutation({
    mutationFn: async (data: any) => {
      let query;

      switch (type) {
        case 'insert':
          query = supabase.from(table).insert(data).select();
          break;
        case 'update':
          const { id, ...updateData } = data;
          query = supabase
            .from(table)
            .update(updateData)
            .eq('id', id)
            .select();
          break;
        case 'delete':
          query = supabase.from(table).delete().eq('id', data.id);
          break;
      }

      const { data: result, error } = await query;

      if (error) {
        throw new Error(error.message);
      }

      return result as T;
    },
    ...options,
  });
}

