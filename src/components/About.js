const About = () => {
  return (
    <div className="section about" id="next_section">
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <img src="images/man_r.jpg" alt="" />
        </div>
        {/* desc */}
        <div className="desc">
          <p>
            안녕하십니까, 데이터로 일하는 프론트엔드 개발자, 강동협입니다.
            프론트엔드의 덕목은 데이터를 사용자들이 보기 좋게 화면상에 나타내는
            것이라고 생각합니다. 다수의 프로젝트 경험을 통해 데이터의 중요성을
            깨달았으며, 더 나아가 데이터 생성, 수집, 관리의 영역까지 관심을
            가지고 있습니다.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age:</strong> 29
              </li>
              <li>
                <strong>Residence:</strong> 대한민국
              </li>

              <li>
                <strong>Address:</strong> 부산시 부산진구 중앙대로 664
              </li>
              <li>
                <strong>Phone:</strong> +82 10 7464 1533
              </li>
              <li>
                <strong>E-mail:</strong> kdh516094@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
