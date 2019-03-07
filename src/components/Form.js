import React from 'react';
import useForm from '../hooks/useForm';
import { CALCULATE_ELO_ENDPOINT, PLAYERS_ENDPOINT } from '../util/constants';
import useApi from '../hooks/useApi';

function Form({ onSubmit }) {
  const [players] = useApi({ url: PLAYERS_ENDPOINT, initialData: [] });
  const { body, setBody, submit, loading } = useForm({
    url: CALCULATE_ELO_ENDPOINT,
    method: 'GET',
    onSuccess: onSubmit,
    initialBody: {
      myRating: 0,
      opponentRating: 0,
      myGameResult: 0.5
    }
  });

  return (
    <form onSubmit={submit}>
      <div>
        <label htmlFor="myRating">Spiller A</label>
        <select
          id="myRating"
          value={0}
          onChange={e => setBody({ ...body, myRating: e.target.value })}
        >
          {players.map(p => (
            <option key={p.player} value={p.rating}>
              {p.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="opponentRating">Spiller B</label>
        <select
          id="opponentRating"
          value={0}
          onChange={e => setBody({ ...body, opponentRating: e.target.value })}
        >
          {players.map(p => (
            <option key={p.player} value={p.rating}>
              {p.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="myGameResult">Resultat</label>
        <select
          id="myGameResult"
          value={body.myGameResult}
          onChange={e => setBody({ ...body, myGameResult: e.target.value })}
        >
          <option value={0}>Tap</option>
          <option value={0.5}>Uavgjort</option>
          <option value={1}>Seier</option>
        </select>
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Laster…' : 'Kalkuler ELO'}
      </button>
    </form>
  );
}

export default Form;
