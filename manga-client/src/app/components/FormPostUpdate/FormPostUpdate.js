import { useState } from 'react';
import { usePost } from '../../hooks/usePost';
import { useUpdate } from '../../hooks/useUpdate';

export default function FormPostUpdate({ crudType }) {
  const [id, setId] = useState('');
  const [animeId, setAnimeId] = useState('');
  const [animeName, setAnimeName] = useState('');
  const [animeRelease, setAnimeRelease] = useState('');
  const { postRequest } = usePost();
  const { updateRequest } = useUpdate();
  const handlePostUpdateForm = async (e, type) => {
    e.preventDefault();

    if (animeId === '' || animeName === '' || animeRelease === '') {
      console.log('Form needs data to be submitted');
    } else {
      try {
        const anime = {
          anime_id: animeId,
          anime_name: animeName,
          anime_release: animeRelease,
        };
        if (type === 'posted') {
          postRequest('http://127.0.0.1:8000/api/anime/', anime);
          console.log(`Anime ${type}`);
          setId('');
          setAnimeId('');
          setAnimeName('');
          setAnimeRelease('');
        } else if (type === 'updated' && id !== '') {
          updateRequest(`http://127.0.0.1:8000/api/anime/${id}/`, anime);
          console.log(`Anime ${type}`);
          setId('');
          setAnimeId('');
          setAnimeName('');
          setAnimeRelease('');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <form onSubmit={(e) => handlePostUpdateForm(e, crudType)}>
        {crudType === 'updated' ? (
          <div className="bg-sky-200 flex flex-wrap items-center mb-2">
            <label className="p-2 w-24">ID</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="grow p-2"
              required
            />
          </div>
        ) : (
          <></>
        )}
        <div className="bg-sky-200 flex flex-wrap items-center mb-2">
          <label className="p-2 w-24">Anime ID</label>
          <input
            type="text"
            value={animeId}
            onChange={(e) => setAnimeId(e.target.value)}
            className="grow p-2"
            required
          />
        </div>

        <div className="bg-sky-200 flex flex-wrap items-center mb-2">
          <label className="p-2 w-24">Name</label>
          <input
            type="text"
            value={animeName}
            onChange={(e) => setAnimeName(e.target.value)}
            className="grow p-2"
            required
          />
        </div>
        <div className="bg-sky-200 flex flex-wrap items-center mb-2">
          <label className="p-2 w-24">Release</label>
          <input
            type="text"
            value={animeRelease}
            onChange={(e) => setAnimeRelease(e.target.value)}
            className="grow p-2"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-sky-600 p-2 text-white cursor-pointer font-bold rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
