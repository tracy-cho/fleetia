export const query = <T>(
  {
    isLoading,
    isError,
    isSuccess,
    fetchStatus,
    data
  }: {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    fetchStatus: "fetching" | "paused" | "idle";
    data: T | undefined;
  },
  initialData: T
): {
  state: "loading" | "hasValue" | "hasError" | "idle";
  data: T;
} => {
  const state =
    isSuccess && fetchStatus === "idle"
      ? "hasValue"
      : isLoading || fetchStatus === "fetching"
      ? "loading"
      : isError
      ? "hasError"
      : "idle";

  if (state === "hasValue" && data) {
    return {
      state,
      data
    };
  }

  return {
    state,
    data: initialData
  };
};
