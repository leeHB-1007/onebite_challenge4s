export default function mission2() {
  return (
    <div className="code-container">
      <h1>day 12 : section 9-2 ~ 9-3 정리</h1>
      <section>
        <h2>9-2 : 인덱스드 엑세스 타입</h2>
        <p>
          정의 : 객체,배열,튜플 타입에서 특정 프로퍼티의 타입을
          가져오는(추출하는) 타입 조작 기법.
        </p>
        <p>그냥 뽑아내고싶은 객체의 타입만 정의해주면 됨. 예를 들어</p>
        <p>
          Post interface에 author 객체가 있고, function printAuthorInfo(author:
          id: number; name: string;) 함수가 있을때 포스트의 author에 수정이
          생기면 계속해서 함수의 프로퍼티를 바꿔줘야댐.{" "}
        </p>
        <p>
          하지만 인덱스드 엑세스는 function printAuthorInfo(author:
          Post["author"]) 라고 정의해주면, Post 타입의 특정 프로퍼티 타입만 가져
          올 수 있음.
        </p>
        <h3 style={{ color: "skyblue" }}>
          즉, 인터페이스객체의 '인덱스'를 사용하면 인터페이스객체의 프로퍼티
          타입만 가져올 수 있음.
        </h3>
      </section>

      <section>
        <h2>9-3 : keyof 연산자</h2>
        <p>
          정의 : 특정 객체 타입으로부터 프로퍼티 키들을 모두 스트링 리터럴
          유니온 타입으로 추출하는 연산자
        </p>
        <p>
          Person interface가 name: string, age: number 로 정의되어있다고 하자.
        </p>
        <p>
          그때 , const person: Person = name: "kim", age: 20 ; 이런 객체가
          있다고 칠때 function getPropertyKey(person: Person, key: "name" |
          "age") 의 함수에 이렇게 key의 값을 정의 해줘야 함. 이런 유니온을
          사용하는것은 문제가 될 가능성이 큼. 수많은 프로퍼티가 있을때 이런
          유니온을 사용하는것은 불편함.
        </p>
        <h3 style={{ color: "skyblue" }}>
          keyof 연산자를 사용하면, keyof Person 이라는 타입이 "name" | "age" 로
          추출됨. 즉 (key : keyof Person) 라고 정의해주면 됨.
        </h3>
        <pre style={{ backgroundColor: "black", padding: "10px" }}>
          {`const developer = {
    name: "김철수",
    role: "프론트엔드",
    experience: 5,
    skills: ["JavaScript", "TypeScript", "React"]
} as const;

// typeof로 타입 추출
type Developer = typeof developer;

/* 추출된 타입:
type Developer = {
    readonly name: "김철수";
    readonly role: "프론트엔드";
    readonly experience: 5;
    readonly skills: readonly ["JavaScript", "TypeScript", "React"];
}
*/`}
        </pre>
        <p>typeof 연산자로 객체 추출해서 선언까지도 가능. </p>
        <p>이것을 이용하여 key: keyof typeof person 이렇게 함수에 작성도 가능.</p>
      </section>
    </div>
  );
}
