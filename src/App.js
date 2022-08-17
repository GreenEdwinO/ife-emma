import React from 'react'
import Section from './Section'
import TheHead from './Header'
import IfeData from './IfeData'
import Pagination from './Pagination'


export default function App() {
  //Pagination code
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(6);

  const IfeItems = IfeData.map(IfeThings => {
    return (
      <Section
      key={IfeThings.id}
      {...IfeThings}/>
      )
  })

  //Pagination code cont
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = IfeItems.slice(indexOfFirstPost, indexOfLastPost );

  // Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <TheHead />
      <h3 className="seemore">Enjoy My Picture-Stories 🎉🎈 <br />Last Updated August 17, 2022. Come Back Another Time To See New Updates 😊</h3>
      <hr/>
      <div className="ife-div-In-app">
      {currentPosts}
      </div>
      <div className="padd">
      <div className='container mt-3'>
      <Pagination postsPerPage={postsPerPage} totalPosts={IfeItems.length} paginate={paginate}/>
      </div>
      </div>
    </div>
  )
}


