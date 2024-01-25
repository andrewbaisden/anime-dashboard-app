import { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useFetch } from '@/app/hooks/useFetch';

export default function Chart() {
  const { error, isLoading, data } = useFetch(
    'http://127.0.0.1:8000/api/anime/'
  );

  const [animeDate, setAnimeDate] = useState('');
  const [filterAnimeDate, setFilterAnimeDate] = useState([]);
  const [hoverData, setHoverData] = useState(null);
  const [chartOptions, setChartOptions] = useState({
    xAxis: {
      categories: [],
    },
    title: {
      text: 'Animes',
      align: 'center',
    },
    series: [{ data: [] }],
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver(e) {
              setHoverData(e.target.category);
            },
          },
        },
      },
    },
  });

  useEffect(() => {
    setChartOptions({
      xAxis: {
        categories: data.map((item) => item.anime_name),
      },
      series: [{ data: data.map((item) => parseInt(item.anime_id)) }],
      plotOptions: {
        series: {
          point: {
            events: {
              mouseOver(e) {
                setHoverData(e.target.category);
              },
            },
          },
        },
      },
    });
  }, [data]);

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  const handleFilterAnime = (e) => {
    e.preventDefault();

    const filterDate = data.filter((a) => a.anime_release === animeDate);
    console.log(filterDate);
    setFilterAnimeDate(filterDate);

    setAnimeDate('');
  };

  return (
    <>
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        <p className="bg-green-300 p-4 mb-4 mt-4 rounded-lg">
          Hovering over: <span className="font-bold">{hoverData}</span>
        </p>
      </div>
      <form onSubmit={handleFilterAnime}>
        <div className="bg-sky-300 rounded-lg p-4 mb-4">
          <div>
            <h1 className="text-xl mb-4">Filter by release year</h1>
            <div className="bg-sky-200 flex flex-wrap items-center mb-2">
              <label className="p-2 w-24">Date:</label>
              <input
                type="text"
                value={animeDate}
                onChange={(e) => setAnimeDate(e.target.value)}
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
          </div>
        </div>
      </form>

      <div className="bg-green-600 p-4 rounded-lg">
        <h1 className="text-xl text-white">Release Year</h1>
        {filterAnimeDate === 0 ? (
          <></>
        ) : (
          <>
            {filterAnimeDate.map((anime) => (
              <div key={anime.id} className="mt-4 text-white">
                <ul className="bg-green-700 mb-4 p-4">
                  <li>
                    <h1 className="text-lg font-bold">{anime.anime_name}</h1>
                  </li>
                  <li>ID: {anime.id}</li>
                  <li>Anime ID: {anime.anime_id}</li>
                  <li>Anime Release Year: {anime.anime_release}</li>
                </ul>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
