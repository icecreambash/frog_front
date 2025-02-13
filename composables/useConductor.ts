export const useConductor = async (request, opts): Promise => {
  const config = useRuntimeConfig()
  return await $fetch(request, {
    baseURL: config.public.baseApiGateway,
    headers:{
      Accept:'application/json',
    },
    credentials:'include',
    ...opts,
  })
}
