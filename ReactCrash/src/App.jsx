/* eslint-disable no-unused-vars */
import Homepage from "./Pages/Homepage";
import {Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom';
import Layout from "./Components/Layout";
import Page from "./Pages/Page";
import JobPage from "./Pages/JobPage";
import AddJobPage from "./Pages/AddJobPage";
import EditJobPage from "./Pages/EditJobPage";



const App = () => {

  const addJob = async (newJob) => {
    const res = await fetch('http://localhost:8000/jobs',{
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const deleteJob = async (id) => {

    const res = await fetch(`http://localhost:8000/jobs/${id}`,{
      method: 'DELETE',
    });
    return;

  }
  
  const editJob = async (newJob)=>{
    const res = await fetch(`http://localhost:8000/jobs/${newJob.id}`,{
      method: 'PUT',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(newJob),
    });
    return;
  }

  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<Layout />}>
         <Route index element={<Homepage/>}/>
         <Route path='/jobs' element={<Page/>}/>
         <Route path='/jobs/:id' element={<JobPage deleteJob={ deleteJob } />}/>
         <Route path='/Addjob' element={<AddJobPage addJobSubmit={addJob}/>}/>
         <Route path='/EditJob/:id' element={<EditJobPage editJob={editJob} />}/>
    </Route>
    )
  )

  return<RouterProvider router={router}/>;
};

export default App
