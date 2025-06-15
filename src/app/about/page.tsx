import "./../../styles/about.css"

export default function About() {
    return (
      <div>
        <div className="about-main">
          <h1>Ko HyungIn</h1>
          <p><span>Nickname</span> KoGandhi</p>
          <p><span>From</span> Republic of Korea</p>
          <p><span>Birth</span> November 11th, 2005</p>
          <p><span>School</span> Konkuk Univ. </p>
          <p className="pb-3"><span>Major</span> Computer Science Engineering</p>
        </div>
        <p className="chainLine">-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</p>
        <div className="about-contact">
          <h1>Contact</h1>
          <p><span>Instagram</span><a href="https://www.instagram.com/______kgd______/" target="_blank"> @______kgd______</a></p>
          <p><span>Discord</span><a href="https://discord.com/channels/@me" target="_blank"> kogandhi05 (고간디#9209)</a></p>
          <p><span>Mail</span><a href="mailto:hyungin0505@naver.com" target="_blank"> hyungin0505@naver.com</a></p>
          <p><span>Tistory</span><a href="https://hyungin0505.tistory.com/" target="_blank"> tistory.com/hyungin0505</a></p>
          <p className="pb-5"><span>Github</span><a href="https://github.com/hyungin0505" target="_blank"> github.com/hyungin0505</a></p>
        </div>
        <p className="chainLine">-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</p>
        <div className="about-content">
          <h1>Activity</h1>
          <p>CAU-tion</p>
          <span>Choong-Ang University Cyber Security Club</span>
          <span className="about-content-date">2025.03 ~</span>
          <p>정보처리기능사</p>
          <span>한국산업인력공단</span>
          <span className="about-content-date">2025.04</span>
          <p>SecurityFACT</p>
          <span>Konkuk University Cyber Security Club</span>
          <span className="about-content-date">2024.03 ~ 2024.06</span>
          <p>TOEIC</p>
          <span>LC 450 / RC 400</span>
          <span className="about-content-date">2024.03</span>
        </div>
        <p className="chainLine">-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</p>
        <div className="about-content">
          <h1>Education</h1>
          <p>Chung-Ang University</p>
          <span>Computer Science and Engineering</span>
          <span className="about-content-date">2025.02 ~ </span>
          <p>Chung-Ang University</p>
          <span>Industrial Security</span>
          <span className="about-content-date">2025.02</span>
          <p>Konkuk University (Seoul)</p>
          <span>Computer Science and Engineering</span>
          <span className="about-content-date">2024.02 ~ 2025.02</span>
        </div>
      </div>
    );
  }