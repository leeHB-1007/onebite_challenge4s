export default function Mission1() {
  return (
    <div>
      <pre>
        <code>{`/**
 * [ 퀴즈 ]
 * 여기에 코드를 작성해주세요
 * 아래 정답 체크 영역의 오류가 사라져야 합니다!
 */

type Nums = number[];
type Colors = string[];
type Coords = [number, number];
type Info = [string, number];

/**
 * [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다
 */
import { Equal, Expect, NotAny } from "@type-challenges/utils";

const numbers: Nums = [1, 2, 3, 4, 5];
const colors: Colors = ["red", "green", "blue"];
const coordinates: Coords = [3, 5];
const info: Info = ["이정환", 27];

type cases = [
  Expect<NotAny<Nums | Colors | Coords | Info>>,
  Expect<Equal<Nums, number[]>>,
  Expect<Equal<Colors, string[]>>,
  Expect<Equal<Coords, [number, number]>>,
  Expect<Equal<Info, [string, number]>>
];`}</code>
      </pre>
    </div>
  );
}
