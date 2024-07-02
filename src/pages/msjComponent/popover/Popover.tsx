/**
 * 
1. Tooltip
목적: 간단한 정보 제공.
특징:
마우스를 특정 요소 위에 올렸을 때 나타나며, 마우스를 치우면 사라집니다.
보통 짧은 텍스트로 이루어져 있습니다.
사용자가 추가적인 정보를 필요로 할 때 유용합니다.
예시: 아이콘 위에 마우스를 올렸을 때 나타나는 설명 텍스트.

2. Modal
목적: 사용자로부터 응답을 받거나 중요한 정보를 제공.
특징:
화면 중앙에 나타나며, 배경을 흐리게 하거나 비활성화시킵니다.
사용자가 모달을 닫기 전까지는 다른 상호작용이 불가능합니다.
보통 '확인', '취소' 등의 버튼이 포함되어 있습니다.
예시: 로그인 창, 확인 메시지.

3. Popover
목적: 추가적인 정보나 옵션 제공.
특징:
특정 요소를 클릭하거나 포커스할 때 나타납니다.
Tooltip보다 더 복잡한 콘텐츠를 포함할 수 있습니다.
보통 화살표로 원본 요소를 가리킵니다.
예시: 프로필 사진을 클릭했을 때 나타나는 사용자 정보 및 설정 메뉴.

4. Dialog
목적: 사용자와의 상호작용을 위한 대화 창.
특징:
Modal과 유사하지만, 더 일반적인 용어로 다양한 형태의 창을 포함합니다.
필수적인 반응을 요구하지 않는 경우도 있습니다.
예시: 설정 창, 파일 선택 창.

정리
Tooltip: 간단한 정보 제공, 마우스 오버 시 나타남.
Modal: 중요한 정보 제공 및 사용자 응답 요구, 배경 비활성화.
Popover: 추가 정보나 옵션 제공, 클릭/포커스 시 나타남.
Dialog: 다양한 상호작용을 위한 대화 창, Modal보다 일반적.
 */

import { useRef } from "react";
import PopoverItem from "./PopoverItem";

/**
 * 
 * 이런 modal이나 popover, tooltip 컴포넌트에도 웹접근성을 지켜서 만들 수 있을까?

답변
:Modal, Popover, Tooltip 같은 컴포넌트도 웹접근성을 준수하여 만들 수 있습니다. 
접근성을 고려한 컴포넌트를 만들면 장애가 있는 사용자도 웹사이트를 더욱 쉽게 이용할 수 있습니다. 
아래는 각각의 컴포넌트에 대해 웹접근성을 지키기 위한 주요 가이드라인입니다.

Modal
- 포커스 관리:
모달이 열릴 때 첫 번째 포커스 가능한 요소로 포커스를 이동시킵니다.
모달이 닫힐 때 포커스를 모달을 열었던 트리거 요소로 되돌립니다.
- 키보드 접근성:
Tab 키로 모달 내부의 요소들만 순환할 수 있도록 합니다.
Esc 키를 눌러 모달을 닫을 수 있도록 합니다.
-ARIA 속성:
aria-modal="true"와 role="dialog"를 사용하여 모달임을 명시합니다.
모달의 제목 요소에 aria-labelledby를 사용하고, 설명 요소에 aria-describedby를 사용합니다.

Popover
-포커스 관리:
Popover가 열릴 때, Popover 내부의 첫 번째 포커스 가능한 요소로 포커스를 이동시킵니다.
Popover가 닫힐 때 포커스를 트리거 요소로 되돌립니다.
-키보드 접근성:
Tab 키로 Popover 내부의 요소들만 순환할 수 있도록 합니다.
Esc 키를 눌러 Popover를 닫을 수 있도록 합니다.
-ARIA 속성:
aria-haspopup="true"를 트리거 요소에 추가하여 Popover가 열릴 수 있음을 알립니다.
Popover에 role="dialog" 또는 role="tooltip"을 사용하여 Popover임을 명시합니다.

Tooltip
-키보드 접근성:
키보드 포커스가 요소에 도달했을 때도 Tooltip이 나타나도록 합니다.
aria-describedby 속성을 사용하여 Tooltip의 ID를 참조하게 합니다.
-ARIA 속성:
Tooltip에 role="tooltip"을 사용하여 Tooltip임을 명시합니다.
Tooltip은 반드시 시각적 요소와의 연관성을 유지해야 합니다.

공통 사항
명확한 텍스트: 모든 텍스트 콘텐츠는 명확하고 이해하기 쉽게 작성합니다.
색 대비: 텍스트와 배경 간의 충분한 색 대비를 제공합니다.
반응형 디자인: 다양한 화면 크기에서도 잘 동작하도록 반응형 디자인을 적용합니다.
이 가이드라인을 따르면서 Modal, Popover, Tooltip 컴포넌트를 제작하면 웹접근성을 준수할 수 있습니다. 
접근성 높은 웹사이트를 만들기 위해서는 이러한 세부 사항들을 신경 쓰는 것이 중요합니다.
 */

const Popover = () => {
  const ulRef = useRef<HTMLUListElement>(null);
  const targetOpen = (index: number) => {
    const popoverList = ulRef.current?.querySelectorAll(
      ".popver"
      // eslint-disable-next-line no-undef
    ) as NodeListOf<HTMLDivElement>;
    console.log(popoverList);
    popoverList.forEach((ele) => ele.classList.remove("display-on"));
    popoverList[index].classList.add("display-on");
  };

  return (
    <div>
      <p></p>
      <ul ref={ulRef} className="w-[300px]">
        <PopoverItem
          openFunc={() => targetOpen(0)}
          text="dfbhkjkv  djfvkjdfbkj jsdbkjdfvjk fnfjfkckl dfbhkjkv  djfvkjdfbkj jsdbkjdfvjk fnfjfkckl "
        />
        <PopoverItem
          openFunc={() => targetOpen(1)}
          text="dfbhkjkv  djfvkjdfbkj jsdbkjdfvjk fnfjfkckl dfbhkjkv  djfvkjdfbkj jsdbkjdfvjk fnfjfkckl dfbhkjkv  djfvkjdfbkj jsdbkjdfvjk fnfjfkckl"
        />
        <PopoverItem
          openFunc={() => targetOpen(2)}
          text="dfbhkjkv  djfvkjdfbkj jsdbkjdfvjk fnfjfkckl dfbhkjkv  djfvkjdfbkj jsdbkjdfvjk fnfjfkckl dfbhkjkv  djfvkjdfbkj jsdbkjdfvjk fnfjfkckl"
        />
        <PopoverItem
          openFunc={() => targetOpen(3)}
          text="dfbhkjkv  djfvkjdfbkj jsdbkjdfvjk fnfjfkckl dfbhkjkv  djfvkjdfbkj jsdbkjdfvjk fnfjfkckl"
        />
      </ul>
    </div>
  );
};

export default Popover;
