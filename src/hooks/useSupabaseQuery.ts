import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

interface UseSupabaseQueryOptions<T>
  extends Omit<UseQueryOptions<T, Error, T>, 'queryKey' | 'queryFn'> {
  table: string;
  select?: string;
  filters?: Array<{
    column: string;
    operator: 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'like' | 'in';
    value: any;
  }>;
  orderBy?: {
    column: string;
    ascending?: boolean;
  };
  limit?: number;
}

export function useSupabaseQuery<T = any>({
  table,
  select = '*',
  filters,
  orderBy,
  limit,
  ...options
}: UseSupabaseQueryOptions<T>) {
  return useQuery({
    queryKey: [table, { select, filters, orderBy, limit }],
    queryFn: async () => {
      let query = supabase.from(table).select(select);

      // Apply filters
      if (filters) {
        for (const filter of filters) {
          switch (filter.operator) {
            case 'eq':
              query = query.eq(filter.column, filter.value);
              break;
            case 'neq':
              query = query.neq(filter.column, filter.value);
              break;
            case 'gt':
              query = query.gt(filter.column, filter.value);
              break;
            case 'gte':
              query = query.gte(filter.column, filter.value);
              break;
            case 'lt':
              query = query.lt(filter.column, filter.value);
              break;
            case 'lte':
              query = query.lte(filter.column, filter.value);
              break;
            case 'like':
              query = query.like(filter.column, filter.value);
              break;
            case 'in':
              query = query.in(filter.column, filter.value);
              break;
          }
        }
      }

      // Apply ordering
      if (orderBy) {
        query = query.order(orderBy.column, {
          ascending: orderBy.ascending ?? true,
        });
      }

      // Apply limit
      if (limit) {
        query = query.limit(limit);
      }

      const { data, error } = await query;

      if (error) {
        throw new Error(error.message);
      }

      return data as T[];
    },
    ...options,
  });
}

