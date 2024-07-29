// --------------------------------------- Number input (스피너가 있는 인풋 필드) ---------------------------------------
export default function CmNumberInput() {
  return (
    <div className="cm-input cm-input-number">
      <input type="number" />
      <div className="cm-input-number__btn">
        <button type="button">
          {/* 화살표 아이콘 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="10"
            viewBox="0 0 12 10"
          >
            <g id="ico_stepper-up" transform="translate(-1039 -297)">
              <rect
                id="Rectangle_85"
                data-name="Rectangle 85"
                width="12"
                height="10"
                transform="translate(1039 297)"
                fill="none"
                opacity="0.1"
              />
              <path
                id="Path_32"
                data-name="Path 32"
                d="M1045.111,304.889,1043,302.778l-2.111,2.111-.778-.778,2.889-2.889,2.889,2.889Z"
                transform="translate(2 -1)"
                fill="#777d87"
              />
            </g>
          </svg>
        </button>
        <button type="button">
          <svg
            id="ico_stepper-down"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="10"
            viewBox="0 0 12 10"
          >
            <rect
              id="Rectangle_85"
              data-name="Rectangle 85"
              width="12"
              height="10"
              fill="none"
              opacity="0.1"
            />
            <path
              id="Path_32"
              data-name="Path 32"
              d="M1043,305.278l-2.889-2.889.778-.778,2.111,2.111,2.111-2.111.778.778Z"
              transform="translate(-1037 -298.5)"
              fill="#777d87"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
