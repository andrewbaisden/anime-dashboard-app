'use client';
import FormPostUpdate from './components/FormPostUpdate/FormPostUpdate';
import FormDelete from '../app/components/FormDelete/FormDelete';
import { useFetch } from './hooks/useFetch';
import { useFetchSWR } from './hooks/useFetchSWR';
import Chart from './components/Chart/Chart';

export default function Home() {
  // Uncomment the code below and comment out the "useFetch" code if your want to use SWR for data fetching --> https://swr.vercel.app/docs/with-nextjs
  // const { data, error, isLoading } = useFetchSWR(
  // 'http://127.0.0.1:8000/api/anime/'
  // );
  // Uses the Fetch API for data fetching
  const { data, error, isLoading } = useFetch(
    'http://127.0.0.1:8000/api/anime/'
  );

  if (error) return <div>An error has occurred.</div>;
  if (isLoading) return <div>Loading...</div>;
  console.log(data);

  return (
    <>
      <div className="container mx-auto mt-10 grid gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div>
          <div className="bg-sky-300 rounded-lg p-4 mb-4">
            <h1 className="text-xl mb-4">POST: Add Anime Form</h1>
            <FormPostUpdate crudType="posted" />
          </div>
          <div className="bg-sky-300 rounded-lg p-4 mb-4">
            <h1 className="text-xl mb-4">UPDATE: Update Anime Form</h1>
            <p className="bg-yellow-100 p-4">
              Select an ID from the list. You can change the data for Anime ID,
              Name and Release.
            </p>
            <FormPostUpdate crudType="updated" />
          </div>
          <div className="bg-sky-300 rounded-lg p-4 mb-4">
            <h1 className="text-xl mb-4">DELETE: Delete Anime Form</h1>
            <FormDelete />
          </div>
          <div className="bg-sky-700 rounded-lg p-4 mb-4 text-white">
            <h1 className="text-xl">GET: Anime Data List</h1>
            {data.map((anime) => (
              <div key={anime.id}>
                <ul className="bg-sky-800 mb-4 p-4">
                  <li>
                    <h1 className="text-lg font-bold">{anime.anime_name}</h1>
                  </li>
                  <li>ID: {anime.id}</li>
                  <li>Anime ID: {anime.anime_id}</li>
                  <li>Anime Release Year: {anime.anime_release}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Chart />
        </div>
      </div>
    </>
  );
}
