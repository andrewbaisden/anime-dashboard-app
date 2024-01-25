import { useState } from 'react';
import { useDelete } from '@/app/hooks/useDelete';

export default function FormDelete() {
  const [id, setId] = useState('');
  const { deleteRequest } = useDelete();
  const handleDeleteForm = async (e) => {
    e.preventDefault();
    if (id === '') {
      console.log('Form needs and id to be submitted');
    } else {
      try {
        deleteRequest(`http://127.0.0.1:8000/api/anime/${id}/`);
        console.log(`Anime ${id} deleted`);
        setId('');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleDeleteForm(e)}>
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
