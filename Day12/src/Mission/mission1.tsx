export default function Mission1() {
  return (
    <div className="code-container">
      <h1>day 12 : section 9</h1>
      <section>
        <h2>9-1 : 타입 조작하기</h2>
        <p>4가지의 타입 조작 기법.</p>
        <ul>
          <li>
            <span> 인덱스드 엑세스 타입</span>
            <p>
              객체,배열,튜플 타입에서 특정 프로퍼티의 타입을 가져오는(추출하는)
              타입 조작 기법.
            </p>
          </li>
          <li>
            <span>Keyof 연산자</span>
            <p>
              특정 객체 타입으로부터 프로퍼티 키들을 모두 스트링 리터럴 유니온
              타입으로 추출하는 연산자
            </p>
          </li>
          <li>
            <span>Mapped(맵드) 타입</span>
            <p>기존의 객체 타입으로부터 새로운 객체 타입을 만드는 타입</p>
          </li>
          <li>
            <span>탬플릿 리터럴 타입</span>
            <p>
              스트링 리터럴 타입을 기반으로 정해진 패턴의 문자열만 포함하는 타입
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
