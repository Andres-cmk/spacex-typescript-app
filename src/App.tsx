import { useState, useEffect } from 'react';
import * as API from "./services/launches";
import logo from "./assets/logo-spacex.png";
import type { Launch } from './types/typesAPI';
import {Image} from "@heroui/react";
import {Card, CardHeader, CardBody} from "@heroui/react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [launches, setLaunches] = useState<Launch[]>([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);


  return (
    <div className="flex flex-col items-center py-10 px-4">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-linear-to-r from-violet-600 to-indigo-600 blur-2xl opacity-30 rounded-full"></div>
        <Image isBlurred src={logo} alt="Logo SpaceX" width={450} className='m-1' />
      </div>
      <h1 className='text-6xl font-bold bg-linear-to-r from-violet-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent mb-12 bg-size-[200%_auto] animate-[gradient_3s_ease_infinite]' style={{fontFamily: 'Orbitron, sans-serif'}}>
        SpaceX Launches
      </h1>

      <section className='w-full max-w-7xl'>
        <Slider {...settings}>
        {launches.map((launch) => (
          <div key={launch.flight_number} className='px-3'>
            <div className='relative'>
              {/* Auroras de fondo */}
              <div className='absolute -top-10 -left-10 w-40 h-40 bg-violet-600/20 rounded-full blur-3xl'></div>
              <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl'></div>
            
              <Card className='py-4 bg-linear-to-b from-violet-900/30 via-black/50 to-indigo-900/30 backdrop-blur-md border border-violet-500/20 transition-all duration-300 hover:scale-[1.02] hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/20 relative z-10 rounded-3xl'>
                <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
                  <h1 className='text-2xl uppercase font-bold text-white tracking-wide' style={{fontFamily: 'Rajdhani, sans-serif'}}>{launch.mission_name}</h1>
                  <p className='text-sm text-gray-400'>Flight #{launch.flight_number} | {new Date(launch.launch_date_utc).toLocaleDateString()}</p>
                </CardHeader>
                <CardBody className='px-4 pt-2 pb-4 overflow-visible py-2 flex flex-col gap-4'>
                  <Image src={launch.links.mission_patch || ''} className='object-cover rounded-xl mx-auto' width={200} />
                  <p className='text-gray-300 text-sm'>Rocket: {launch.rocket.rocket_name} ({launch.rocket.rocket_type})</p>
                  {launch.links.article_link && (
                    <a 
                      href={launch.links.article_link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200'
                    >
                      Button Link
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </CardBody>
              </Card>
            </div>
          </div>
        ))}
        </Slider>
      </section>
    </div>
  );
}

export default App