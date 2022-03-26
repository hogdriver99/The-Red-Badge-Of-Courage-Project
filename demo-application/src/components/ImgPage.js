// import one from "../civilWarImages/1.png"
import crane2 from "../civilWarImages/crane2.jpg"

const ImgPage = () => {
  return (
    <div className='bookContainerIntro'>
        <div className='book'>
            <div className="intro" id="top">
                <h2 id="item">Images</h2>
                <div className="craneImg" id="item">
                    <img id='crane' src={crane2}/>
                </div>
            </div>
        </div>
    </div>
  )
};

export default ImgPage;
