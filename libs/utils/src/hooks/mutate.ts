import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DETAIL_QUERY_KEY } from "../global/queryKeys";

// export const makeCamelCase = <T>(data: T): T => {
//   if (Array.isArray(data)) {
//     return data.map(makeCamelCase) as any;
//   }
//   if (typeof data === "object") {
//     const newData: any = {};
//     type keyType = keyof typeof data;
//
//     Object.keys(data).forEach(key => {
//       const newKey = key.replace(/_([a-z])/g, g => g[1].toUpperCase());
//       newData[newKey] = makeCamelCase(data[key as keyType]);
//     });
//     return newData;
//   }
//   return data;
// };

//#TODO : 별도로 빼기전까지 수정이 용이하게 여기 둡니다... peer dependency 설정 꼭 할것...

/**
 * React Query에서 공통된 로직을 처리하는 커스텀 훅입니다.
 *
 * @template T - store에 저장되는 데이터의 타입.
 * @template K - 함수에서 사용되는 변수의 타입.
 *
 * @param {any[]} queryKey - 쿼리 키
 * @param {(data: T, variables: K) => Promise<T>} mutationFn - Mutation을
 * 수행하는 비동기 함수입니다.
 * @param {(oldData: T, variables: K) => T} updateData - 캐시에서 데이터를 업데이트하는 함수입니다.
 * @param {T} initialValue - 캐시에 데이터가 없을 경우 사용되는 초기값입니다.
 *
 * @returns useMutation과 동일한 반환값을 가집니다.
 */
export const useCommonMutation = <T, K>(
  queryKey: any[],
  mutationFn: (data: T, variables: K) => Promise<T | void>,
  updateData: (oldData: T, variables: K) => T,
  initialValue: T
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: queryKey,
    mutationFn: async (variables: K) => {
      const queryData = queryClient.getQueryData<T>(queryKey) ?? initialValue;

      return await mutationFn(queryData, variables);
    },
    onMutate: async (variables: K) => {
      const queryData = queryClient.getQueryData<T>(queryKey) ?? initialValue;

      queryClient.setQueryData<T>(queryKey, () => {
        return updateData(queryData, variables);
      });
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData<T>(queryKey, context as any);
    }
  });
};

/**
 * 리스트 업데이트용 React Query 커스텀 훅입니다.
 *
 * @template T - store에 저장되는 데이터의 타입.
 * @template K - 함수에서 사용되는 변수의 타입.
 *
 * @param {any[]} queryKey - 쿼리 키
 * @param {(data: T, variables: K) => Promise<T | void>} mutationFn - Mutation을
 * 수행하는 비동기 함수입니다.
 * @param {(oldData: T, variables: K, queryKey: readonly any[]) => T} updateData - 캐시에서 데이터를 업데이트하는 함수입니다.
 * @param {T} initialValue - 캐시에 데이터가 없을 경우 사용되는 초기값입니다.
 *
 * @param successCallback - 성공시 수행할 행동입니다.
 * @returns useMutation과 동일한 반환값을 가집니다.
 */
export const useCommonListMutation = <T, TVariables, TReturnData = {}>(
  queryKey: any[],
  initialValue: T,
  {
    mutationFn,
    updateData,
    successCallback
  }: {
    mutationFn: (data: T, variables: TVariables) => Promise<TReturnData>;
    updateData: (
      oldData: T,
      variables: TVariables,
      queryKey: readonly any[]
    ) => T;
    successCallback?: (
      data: TReturnData,
      variables: TVariables,
      context: T
    ) => T;
  }
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: queryKey,
    mutationFn: async (variables: TVariables) => {
      const queryData = queryClient.getQueryData<T>(queryKey) ?? initialValue;

      return mutationFn(queryData, variables);
    },
    onSuccess: (data, variables) => {
      if (!successCallback) {
        return;
      }
      const oldData = queryClient.getQueryData<T>(queryKey) ?? initialValue;

      const currentCallbackData = successCallback(data, variables, oldData);

      queryClient.setQueryData<T>(queryKey, currentCallbackData);
    },
    onMutate: async (variables: TVariables) => {
      const queryCache = queryClient.getQueryCache();
      const data = queryCache.findAll({
        queryKey: queryKey.filter(key => typeof key === "string")
      });
      data.forEach(({ queryKey }) => {
        queryClient.setQueryData<T>(queryKey, oldData => {
          if (oldData) {
            return updateData(oldData, variables, queryKey);
          }
        });
      });
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData<T>(queryKey, context as any);
    }
  });
};

export const useCommonListMutationWithQuery = <
  T,
  TVariable extends {
    reviews: number[];
  },
  L
>(
  queryKey: any[],
  mutationFn: (data: T, variables: TVariable) => Promise<void>,
  updateListData: (
    oldData: T,
    variables: TVariable,
    queryKey: readonly any[]
  ) => T,
  updateQueryData: (
    oldData: L,
    variables: TVariable,
    queryKey: readonly any[]
  ) => L,
  initialValue: T
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: queryKey,
    mutationFn: async (variables: TVariable) => {
      const queryData = queryClient.getQueryData<T>(queryKey) ?? initialValue;

      return await mutationFn(queryData, variables);
    },
    onMutate: async (variables: TVariable) => {
      const queryCache = queryClient.getQueryCache();

      //리스트 업데이트
      queryCache
        .findAll({
          queryKey: queryKey.filter(key => typeof key === "string")
        })
        .forEach(({ queryKey }) => {
          queryClient.setQueryData<T>(queryKey, oldData => {
            if (oldData) {
              return updateListData(oldData, variables, queryKey);
            }
          });
        });

      //개별 업데이트.

      variables.reviews.forEach(reviewId => {
        const detailQueryKey = [DETAIL_QUERY_KEY, queryKey[1], reviewId];
        const queryData = queryClient.getQueryData<L>(detailQueryKey);
        if (!queryData) {
          return;
        }
        // NOTE : 리스트와 디테일은 한묶음으로, 두번째 키가 무조건 같아야한다.

        queryClient.setQueryData<L>(detailQueryKey, () => {
          return updateQueryData(queryData, variables, detailQueryKey);
        });
      });
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData<T>(queryKey, context as any);
    }
  });
};
