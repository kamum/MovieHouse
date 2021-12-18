import { NextPage } from 'next';
import Head from 'next/head'
import { useContext, useState } from 'react'

import { MoviesContext } from '../MoviesContext';

import { img_url } from '../services/img_url'

import { InfoBox, Main, Overview, Panel, ResumeBox, Section } from './homeStyles';



const Home: NextPage = () => {
  const movies = useContext(MoviesContext)

  return (
    <>
      <Head>
        <title>Home | MovieHouse</title>
      </Head>
      <Main>{movies.map(movie => (
        <Section key={movie.id}>
          {console.log(movie)}
          <Panel>
            <img src={img_url + movie.poster_path} alt={movie.title} width='300' height='450' />

            <InfoBox>
              <p><strong>Title:</strong> {movie.title}</p>
              <span>note {movie.vote_average}</span>

              <Overview>
                <ResumeBox>
                  <h2>Resume</h2>
                  <p>Date: {movie.release_date}</p>
                </ResumeBox>
                {movie.overview}
              </Overview>
            </InfoBox>
          </Panel>
        </Section>
      ))}


      </Main>
    </>

  )
}

export default Home
