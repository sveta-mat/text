import { NavLink } from "react-router-dom"



function Experiment(){
    return (
         <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <NavLink to="/" className="back-button">
                Վերադառնալ գլխավոր էջ
              </NavLink>
            <h2>Այլ աղերով փորձեր</h2>
            <h1>Քիմիական կտրվածք</h1>
            <video 
              width="640" 
              height="360" 
              controls 
              autoPlay 
              muted 
              loop 
              style={{ borderRadius: "10px", boxShadow: "0 0 10px gray" }}
            >
              <source src="/videos/video_2025-05-02_12-32-18.mp4" type="video/mp4" />
              Ձեր բրաուզերը չի աջակցում վիդեո նվագարկումը:
            </video>
         
            <h1>Աղերի բոցերի գույները </h1>
           
            <video className="video-player" controls>
                <source src='/videos/video_2025-05-02_12-33-36.mp4' type="video/mp4" />
                Ձեր բրաուզերը չի աջակցում վիդեո ցուցադրությանը։
              </video>
         
          </div>
    )
}
export default Experiment