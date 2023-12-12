import React from "react";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import FMGofer from 'fm-gofer';

const queryClient = new QueryClient()

function App(props) {
  return (
      <QueryClientProvider client={queryClient}>
        <Example props={props}/>
      </QueryClientProvider>
  );
};

function Example(props){
  const queryClient = useQueryClient()

  const { data, status, error, isFetching } = useQuery({
      queryKey: ['data'],
      queryFn: async() => {
        let res = await FMGofer.PerformScript('Refetch Data',  JSON.stringify(data));
        console.log(res);
        return JSON.parse(res).data
      },
      // Refetch the data every second
      refetchInterval: 1000,
      refetchOnWindowFocus: true,
  })
  
  console.log(data, status, error, isFetching);

  return (
    <div>{data}</div>
  )
};

export default App;
