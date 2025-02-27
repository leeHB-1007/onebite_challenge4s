export default function mission3() {
  return (
    <div className="code-container">
      <h1>day 12 : section 9-4 ~ 9-5 정리</h1>
      <section>
        <h2>9-4: 맵드(Mapped) 타입 </h2>
        <p>기존의 객체 타입으로부터 새로운 객체 타입을 만드는 타입</p>
        <p>
          수정하기를 원하는 프로퍼티만 보내주고싶음. 그러기 위해서는 새로운
          인터페이스를 하나 더 만들어줘야댐 하지만 너무 불편함.
        </p>
        <pre style={{ backgroundColor: "black", padding: "10px" }}>
          {`
           interface User {
            id: number;
            name: string;
            age: number;
            gender: "male" | "female";
          }

          type PartialUser = {
            [key in "id" | "name" | "age" | "gender"]?: User[key]
            }
            // OR
        type PartialUser = {
            [key in keyof User]?: User[key]
            }
            // 이렇게 하면 User의 모든 프로퍼티를 선택적으로 만들 수 있음.
            // 이렇게 만들어진 타입을 맵드 타입이라고 함.
            // 맵드 타입은 기존의 타입을 이용하여 새로운 타입을 만드는 타입
            
        // 유저 정보 불러오는기능
        function fetchUser(): User {} 

        // 유저 정보 수정하는 기능
        function updateUser(user: PartialUser) {}
          `}
        </pre>
        <p>이렇게 지정할 수 있음.</p>
      </section>

      <section>
        <h2>9-5 : 템플릿 리터럴 타입</h2>
        <p>
          스트링 리터럴 타입을 기반으로 정해진 패턴의 문자열만 포함하는 타입
        </p>
        <pre style={{ backgroundColor: "black", padding: "10px" }}>
          {`
            type Color = "red" | "green" | "blue";
            type Animal = "dog" | "cat" | "bird";

            // 아래가 '템플릿' 리터럴
            type ColorAnimal = \`\${Color}-\${Animal}\`;
            // 결과: "red-dog" | "red-cat" | "red-bird" | "green-dog" | "green-cat" | "green-bird" | "blue-dog" | "blue-cat" | "blue-bird"
          `}
        </pre>
      </section>
    </div>
  );
}
