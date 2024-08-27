interface Props {
  idName: string;
  length: number;
  targetId: string;
  btnNames?: string[]; //버튼에 특별한 이름을 주고 싶으면..
}

export function SpyScrollNavi({ idName, length, targetId, btnNames }: Props) {
  return (
    <div className="w-full h-[max] flex sticky top-0 left-0 bg-white">
      {Array.from({ length: length }).map((_, idx) => {
        const id = idName + idx;
        return (
          <a
            href={`#${idName}${idx}`}
            key={idx}
            className={`flex-1 border h-[80px] leading-[80px] text-center ${id === targetId ? "text-black" : "text-gray-300"}`}
          >
            {btnNames ? btnNames[idx] : idx + 1}
          </a>
        );
      })}
    </div>
  );
}
