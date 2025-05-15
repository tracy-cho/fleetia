import React from "react";

type MarketingProps = {};

const Marketing: React.FC<MarketingProps> = () => {
  return (
    <div className="page-body">
      <p>(주)온마이뎁 귀중</p>
      <p>
        본인은 귀사가 아래의 내용과 같이 본인의 개인 정보를 수집·이용하는데
        동의합니다.
      </p>
      <h3>
        <strong>1. 수집하는 개인정보의 항목</strong>
      </h3>
      <ul className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          이름, 휴대전화번호, 이메일 주소 등.
        </li>
      </ul>
      <ul className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          고객 ID, 접속 일시, IP주소, SNS아이디 등.
        </li>
      </ul>
      <h3>
        <strong>2. 개인정보의 수집 및 이용 목작</strong>
      </h3>
      <p>
        고객에 대한 편의제공, 귀사 및 제휴업체의 상품·서비스 안내 및 이용권유,
        사은·판촉행사 등의 마케팅 활동, 시장조사 및 상품·서비스 개발연구 등을
        목적으로 수집·이용 합니다.
      </p>
      <h3>
        <strong>3. 개인정보의 보유 및 이용기간</strong>
      </h3>
      <p>
        동의일로부터 회원 탈퇴 혹은 마케팅 동의 해제시 까지 보유·이용합니다.
      </p>
      <p>
        ※ 귀하는 개인(신용)정보의 선택적인 수집∙이용, 제공에 대한 동의를 거부할
        수 있습니다.
      </p>
      <p>
        ※ 다만, 동의하지 않을 경우 관련 편의제공(경품제공, 신상품 및 투자
        서비스소개, 사은행사)안내 등 이용 목적에 따른 혜택에 제한이 있을 수
        있습니다. 그 밖에 계약과 관련된 불이익은 없습니다.
      </p>
      <p>
        ※{" "}
        <strong>
          동의한 경우에도 귀하는 동의를 철회하거나 마케팅 목적으로 귀하에게
          연락하는 것을 중지하도록 요청할 수 있습니다.
        </strong>
      </p>
      <p>
        ※ 상기 내용이 변동하는 경우 당사의 인터넷홈페이지 게시 등을 통해 그
        내용을 공시합니다.
      </p>
      <p>2021.10.22.</p>
    </div>
  );
};

export { Marketing };
