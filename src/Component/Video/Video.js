import { NavLink } from "react-router-dom"





function Video(){
    return   <div style={{ textAlign: "center", marginTop: "20px" }}>
          <NavLink to="/" className="back-button">
        Վերադառնալ գլխավոր էջ
      </NavLink>
    <h2>Մեր Տեսանյութերը</h2>
    <h3>Հարցեր բժշկուհուն KI-ի վերաբերյալ</h3>
    <video 
      width="640" 
      height="360" 
      controls 
      autoPlay 
      muted 
      loop 
      style={{ borderRadius: "10px", boxShadow: "0 0 10px gray" }}
    >
      <source src="/videos/video_2025-04-27_16-02-14.mp4" type="video/mp4" />
      Ձեր բրաուզերը չի աջակցում վիդեո նվագարկումը:
    </video>
    <h3>Հարցեր բժշկուհուն  KMnO₄-ի վերաբերյալ</h3>
    <video 
      width="640" 
      height="360" 
      controls 
      autoPlay 
      muted 
      loop 
      style={{ borderRadius: "10px", boxShadow: "0 0 10px gray" }}
    >
      <source src="/videos/IMG_0824.mp4" type="video/mp4" />
      Ձեր բրաուզերը չի աջակցում վիդեո նվագարկումը:
    </video>
    <h1>Քիմիական փորձեր KMnO₄ և HI-ով </h1>
    <h3>KI-ով ստանում ենք փղի ատամի մածուկ</h3>
    <video className="video-player" controls>
        <source src='/videos/video_2025-04-27_16-57-38.mp4' type="video/mp4" />
        Ձեր բրաուզերը չի աջակցում վիդեո ցուցադրությանը։
      </video>
      <h3>KMnO₄-ով ստանում ենք քիմիական քամելիոն</h3>
      <video className="video-player" controls>
        <source src='/videos/video_2025-04-27_16-57-56.mp4' type="video/mp4" />
        Ձեր բրաուզերը չի աջակցում վիդեո ցուցադրությանը։
      </video>
      <h3>Աղերի համակցումը այլ դեղամիջոցների հետ</h3>
      <video className="video-player" controls>
        <source src='/videos/IMG_0859.mp4' type="video/mp4" />
        Ձեր բրաուզերը չի աջակցում վիդեո ցուցադրությանը։
      </video>
  </div>
}
export default Video