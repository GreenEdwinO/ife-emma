import React, { useEffect, useState } from 'react'
import Section from './Section'
import TheHead from './Header'
import IfeData from './IfeData'
import ReactPaginate from "react-paginate";
import "./App.css"


export default function App() {
  //Pagination code
  const [currentImages, setCurrentImages] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [imagesOffset, setImagesOffset] = useState(0);

  const IfeItems = IfeData.map(IfeThings => {
    return (
      <Section
        key={IfeThings.id}
        {...IfeThings} />
    )
  })

  // Pagination code
  useEffect(() => {
    const endOffset = imagesOffset + 6;
    setCurrentImages(IfeItems.slice(imagesOffset, endOffset));
    setPageCount(Math.ceil(IfeItems.length / 6));
  }, [IfeItems, imagesOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 6) % IfeItems.length;
    setImagesOffset(newOffset);
  };

  return (
    <div>
      <TheHead />

      <h3 className="seemore">Enjoy My Picture-Stories 🎉🎈 <br />Last Updated October 13, 2022. Come Back Another Time To See New Updates 😊</h3>

      <hr />

      <div className="ife-div-In-app">
        {currentImages}
      </div>

      {/* Pagination code */}
      <div className="pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={.1}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
      <p style={{ fontSize: "0.8rem", textAlign: "center", marginBottom: "1rem" }}>Made with 💝 by <a href="https://greenojegwo.netlify.app/" style={{ textDecoration: "none", color: "green" }}>Green</a></p>
    </div>
  )
}


