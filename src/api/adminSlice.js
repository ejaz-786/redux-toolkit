import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// RTK Query - for data fetching

export const adminApi = createApi({
  reducerPath: "amdin",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:8000/` }),
  endpoints: (builder) => ({
    getAccount: builder.query({
      query: () => `accounts`,
      providesTags: ["accounts"],
    }),
    addAccount: builder.mutation({
      query: (amount, id) => ({
        url: "accounts",
        method: "POST",
        body: { id, amount },
      }),
      invalidatesTags: ["accounts"],
    }),
    deleteAccount: builder.mutation({
      query: (id) => ({
        url: `accounts/${id}`,
        method: "DELETE",
      }),
    }),
    updateAccount: builder.mutation({
      query: ({ id, amount }) => ({
        url: `accounts/${id}`,
        method: "PATCH",
        body: { id, amount },
      }),
    }),
  }),
});

export const {
  useGetAccountQuery,
  useAddAccountMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
} = adminApi;
