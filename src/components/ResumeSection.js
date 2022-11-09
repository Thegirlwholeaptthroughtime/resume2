const ResumeSection = () => {
  return (
    <div className="section resume" id="section-history">
      <div className="content">
        <div className="cols">
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Experience</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              <div className="resume-item content-box ">
                <div className="date">2013 - 2020</div>
                <div className="name">학생회</div>
                <div className="text">
                  Collaborate with creative and development teams on the
                  execution of ideas.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2016.07 - 2017.05</div>
                <div className="name">브라운브레스</div>
                <div className="text">
                  매니저로 근무하며 판매부터 매장관리 경험
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2018.09 - 2020.02</div>
                <div className="name">시티바캉스</div>
                <div className="text">홀 서빙 및 바리스타</div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2021.09 - 2022.06</div>
                <div className="name">유니드어스</div>
                <div className="text">웹 프로젝트 및 웹 유지보수 담당</div>
              </div>
            </div>
          </div>
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Education</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              <div className="resume-item content-box">
                <div className="date">2013 - 2020</div>
                <div className="name">부경대학교</div>
                <div className="text">법학과</div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2021.04 - 2021.09</div>
                <div className="name">그린컴퓨터 아카데미</div>
                <div className="text">
                  포토샵, 일러스트, Html5, css3, Jqeury, Java Script 등
                  프론트개발의 기초를 학습함
                </div>
              </div>
              <div className="resume-item content-box active">
                <div className="date">2022.07 - 2022.11</div>
                <div className="name">스파로스 아카데미</div>
                <div className="text">
                  React, Next js, Recoil 등 프론트엔드 심화과정 학습, 2개의 팀
                  프로젝트 경험
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeSection;
