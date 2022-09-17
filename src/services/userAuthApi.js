
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.punitkashyup.live/api/' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query:(user)=>{
        return{
            url: 'register/',
            method: 'POST',
            body:user,
            headers:{
                'Content-type':'application/json',
            }
        }
      }
    }),
    loginUser: builder.mutation({
        query:(user)=>{
          return{
              url: 'login/',
              method: 'POST',
              body:user,
              headers:{
                  'Content-type':'application/json',
              }
          }
        }
      }),
  }),
})

export const { useRegisterUserMutation, useLoginUserMutation } = userAuthApi