import React, { useEffect, useRef, useState } from "react";
import { SpyScrollNavi } from "./component/SpyScrollNavi";

//id값 중복을 방지하기 위해 props로 받음.
interface Props {
  children: React.ReactNode[];
  idName: string;
}

export function SpyScroll({ children, idName }: Props) {
  const [targetId, setTargetId] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((ele) => {
          //console.log(entries.length);
          // 맨 처음 oserver로 감시 등록할땐, entries.length가 전체 갯수 이지만,
          // 뷰포트에 elemet가 감시될 때는 보여지는 element만 entries에 등록된다.
          if (ele.isIntersecting) {
            setTargetId(ele.target?.id);
          }
        });
      },
      {
        threshold: 0.8
      }
    );
    const targetList = containerRef.current?.querySelectorAll(`.${idName}`);

    targetList?.forEach((ele) => {
      observer.observe(ele);
    });

    return () => {
      //console.log("bye");
      observer.disconnect();
    };
  }, []);

  return (
    <div className="spy-scroll-main w-[full] h-[max] relative">
      <SpyScrollNavi
        idName={idName}
        length={children.length}
        targetId={targetId}
      />
      <div ref={containerRef} className="spy-scroll-container w-[full] h-[max]">
        {children?.map((ele, idx) => {
          return (
            <div key={idx} className={idName} id={`${idName}${idx}`}>
              {ele}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * javascript로 무한 스크롤을 구현한다면?
웹사이트에서 특정 위치 (예를 들면 웹사이트 맨 밑부분)에 도달했을 때 다음 페이지 데이터를 가져오는 '무한 스크롤' 기능을 구현한다고 해보자. 가장 잘 알려진 방법으로는 Javascript 문법 중 addEventListener()의 scroll 이벤트를 이용해서 구현할 수 있을 것이다.

추가로, Element.getBoundingClientRect() 메서드는 엘리먼트의 크기와 뷰포트에 상대적인 위치 정보를 제공하는 DOMRect 객체를 반환하는데, getBoundingClientRect() 를 통해 우리가 원하는 특정 위치를 정할 수도 있다.

정리하자면, document에 스크롤 이벤트를 등록하여 엘리먼트의 현재 지점을 관찰하고, 엘리먼트가 특정 위치에 도달했을 때 실행할 콜백함수를 등록하여 구현할 수 있다. 

 * 기존 scroll 의 문제점
하지만 위와같이 scroll 이벤트를 사용하거나, 요소 위치를 계산하는 getBoundingClientRect()와 같은 메서드를 사용하면 성능 문제가 발생한다.

scroll 이벤트의 경우 단시간에 수백번 호출이 되며 동기적으로 실행된다. 또한, 각 엘리먼트 마다 이벤트가 등록되어 있는 경우, 사용자가 스크롤할 때마다 이벤트가 끊임없이 호출되기 때문에 몇배로 성능 문제가 발생한다. 특정 지점을 관찰하는 getBoundingClientRect() 역시 계산을 할 때마다 리플로우 현상이 일어난다는 단점이 있다. 따라서, 위에 작성한 모든 코드는 메인 스레드에서 실행되기 때문에, 이 중 하나라도 호출되면 성능 문제를 일으킬 수 있다.

리플로우(reflow): 리플로우는 문서 내 요소의 위치와 도형을 다시 계산하기 위한 웹브라우저 프로세스의 이름으로, 문서의 일부 또는 전체를 다시 렌더링하는 데 사용됩니다. (..생략) 간혹 문서에 있는 단일 요소를 리플로우하려면 상위 요소 및 이어지는 모든 요소도 리플로우해야 할 수 있습니다.
출처: 브라우저 리플로우 최소화 [Google Developers]

Intersection Observer란
위에서 언급한 성능 문제를 해결하기 위해, 2016년 4월 구글 개발자 페이지 통해 Intersection Observer API(교차 관찰자 API)가 소개되었다.

Intersection observer는 브라우저 뷰포트(Viewport)와 원하는 요소(Element)의 교차점을 관찰하며, 요소가 뷰포트에 포함되는지 아닌지 구별하는 기능을 제공한다. (더 쉽게는 특정 요소가 사용자 화면에 보이는지 안보이는지 판단함)

Intersection observer는 비동기적으로 실행되기 때문에, 메인 스레드에 영향을 주지 않으면서 요소들의 변경사항들을 관찰할 수 있다. 즉, 위에서 언급한 scroll 같은 이벤트 기반의 요소 관찰에서 발생하는 렌더링 성능이나 이벤트 연속 호출 같은 문제들을 해결해준다. 또한, getBoundingClientRect() 대신에 IntersectionObserverEntry의 속성을 활용하여 요소들의 위치를 알 수 있기 때문에, 리플로우 현상을 방지할 수 있다.
 * 
 */
