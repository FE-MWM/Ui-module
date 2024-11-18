import { useFetcherData } from "./useFercherData";

const AsynchronousTap = () => {
  const { data, isLoading, error } = useFetcherData();

  if (isLoading) return <>loading</>;

  if (error) return <>{error.message}</>;

  return (
    <div className="w-full h-[80vh]">
      {data?.map((tap, idx) => {
        return <nav key={idx}>{tap.title}</nav>;
      })}
    </div>
  );
};

export default AsynchronousTap;
