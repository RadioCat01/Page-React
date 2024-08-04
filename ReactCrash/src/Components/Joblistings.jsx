/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Jobcomp from './Jobcomp';
import Spinner from './Spinner';

const Joblistings = ({ isHome = false }) => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{ 
    console.log("fetching");
    const fetchJobs = async () => {
      const apiurl = isHome ? 'http://localhost:8000/jobs?_limit=3' : 'http://localhost:8000/jobs';
      try {
        const res = await fetch(apiurl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  },[]);


  return (
    <>
     <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs':'Browse Jobs'}
        </h2>
       
          {loading ? (<Spinner loading={loading}/>) : (
            <>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job)=>(
            <Jobcomp key={job.id} job={job}/>
            
        ))} 
             </div>
            </>
          )}
      </div>
    </section>
    </>
  )
}

export default Joblistings
