import { fetchPost, fetchPostActivity, fetchApi, fetchZoho } from "./shared/services/clinic_services";

export default async function Home() {
   const post : any = await fetchPost();
   const postActvity = await fetchPostActivity();
   const fetchAPIJSON : any = await fetchApi();
   const fetchZOHO: any = await fetchZoho();
  if (!post) {
    return (<div className="container mx-auto">
      <div className="flex flex-wrap items-center place-items-center"> <div className="flex flex-wrap items-center place-items-center">
        <div className="animate-pulse flex max-w-sm p-4 rounded-lg">
            <div className="h-2 bg-gray-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-200 rounded col-span-2"></div>
                <div className="h-2 bg-gray-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div> </div>
      </div>);
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-4">{
          post && post.res && post.res.search_result.map((data: any) => {
            return (
                <div key={data.id + data.name} className='flex-1'>
                  <div className="max-w-sm p-4 rounded-lg " >
                    <div className="h-[302px] ">
                      <img className="rounded-lg object-cover h-full w-full" src={'https://static.dentaldepartures.com/' + data.photos[0]} alt="" />
                    </div>
                    <div className="p-5">
                      <h5 > {data.name}</h5>
                    </div>
                  </div>
                </div>
            )
          })

        }</div></div></>
  );
}
