// import one from "../civilWarImages/1.png"
import crane2 from "../civilWarImages/crane2.jpg"
import crane from "../civilWarImages/crane.jpg"

const ImgPage = () => {
  return (
    <div className='bookContainerIntro'>
        <div className='book'>
            <div className="intro" id="top">
                <h2 id="item">Images</h2>
                <div className="introImg" id="item">
                    <img id='imgItem' src={crane2}/>
                </div>
                <div className="introImg" id="item">
                    <img id='imgItem' src={crane}/>
                </div>
            </div>
        </div>
    </div>
  )
};

export default ImgPage;
