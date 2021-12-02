import React, { useEffect } from 'react'
import './Home.scss'
import axiosConfig from 'axiosConfig';

const Home = () => {

  useEffect(() => {
    const test = async () => {
      try {
        const result = await axiosConfig({
          method: 'get',
          url: `user`,
        })

        console.log(result.data);
      } catch (e) { console.log(e) }
    }

    test();
  }, [])

  return (
    <div className="home">
     wowffff
    </div>
  );
}

export default Home;