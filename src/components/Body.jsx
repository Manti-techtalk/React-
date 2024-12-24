import React from 'react'

function Body() {
  return (
    <>
    <div className="container p-5 mt-5">
    <div className='d-flex align-items-center position-relative' style={{width:'80%', height:'100px', borderRadius:'50px'}} > <input className='form-control border' style={{width:'100%', height:'90px', borderRadius:'50px', border:'none', paddingRight: '50px'}} type="text" placeholder='search for song' /> <i class="fa-solid fa-magnifying-glass position-absolute" 
    style={{fontSize:'2em', right: '20px', top: '50%', transform: 'translateY(-50%)'}} ></i>
       </div>
       <div className="row mt-3 mb-3">
        <h1>Song Title</h1>
        <p>Artist*Album(year)</p>
       </div>
       <div className="row ">
            <div className="col-12 bg-tertiary border border-1 p-4">
                <p className='h4'>Verse 1</p>
                <p>"Lyrics here"</p>
            </div>
        <div className="col-12 bg-tertiary g-3 border border-1 p-4">
            <p className='h4'>Chorus</p>
            <p>"Lyrics here"</p>
        </div>
        <div className="row mt-5">
            <p className='h1'>Similar Songs</p>
        </div>
        <div className="row ">
            <div className="col-2 bg-light rounded "> Similar Song1</div>
            <div className="col-2 bg-light rounded ">Similar Song 2</div>
        </div>
       </div>
    </div>
    </>
  )
}

export default Body