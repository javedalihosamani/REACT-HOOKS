import React, { Fragment, useEffect, useState } from 'react'

const url = 'https://jsonplaceholder.typicode.com';
/* 
    1. Mount
      useEffect(() => {},[])

    2. Update
      useEffect(() => {},[dependency])

    3. UnMount
     useEffect(() => {
          return () => {}
      },[])
*/

const Ex3 = () => {

    // Server Data State
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        await fetch(`${url}/posts`)
         .then(response => response.json())
         .then(data => setPosts(data))
         .catch(err => console.error('Error:', err));
    }
    useEffect(() => {
        getPosts();
    }, []);

  return (
    <Fragment>
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h5 className="display-3 ">useEffect Hook</h5>
                    <p className="text-secondary">useEffect is a tool that lets us interact with the outside world but not affect the rendering or performance of the component that it's in.</p>
                    <p className="text-secondary">THAT GETS TRIGGER FOR componentDidMount, componentDidUpdate and componentWillUnmount lifecycle.</p>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Ex3