import styles from './cm.module.scss'

// // number input (스피너가 있는 인풋 필드)
// export function CmNumberInput(props: {
//   isError?: boolean // 에러일 경우
// }) {
//   return (
//     <div className={`${styles['cm-input']} ${styles['cm-input--number']}`}>
//       <input type="number" />
//       <div className={styles['cm-input--number__btn']}>
//         <button type="button">+</button>
//         <button type="button">-</button>
//       </div>
//     </div>
//   )
// }

// Basic input
export function CmBasicInput(props: {
  isReset?: boolean // 초기화 버튼
  isSecret?: boolean // 비밀번호 감추기 버튼
  isError?: boolean // 에러일 경우
  type?: string // input 타입
  placeholder?: string
}) {
  return (
    <div
      className={`${styles['cm-input']}  ${
        props.type === 'number' ? styles['cm-input--number'] : ''
      } ${props.isError ? styles['cm-input--error'] : ''} ${
        styles['cm-input__btn']
      }`}
    >
      <input
        type={props.type ? props.type : 'text'}
        placeholder={props.placeholder ? props.placeholder : ''}
      />
      {props.isReset ? (
        <button type="button">x</button>
      ) : props.isSecret ? (
        <button type="button">ㅇ</button>
      ) : null}
    </div>
  )
}

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      {/* 공통 컴포넌트 */}
      <h1
        style={{
          marginBottom: '24px',
          fontWeight: '600',
          fontSize: '24px',
        }}
      >
        Common Components
      </h1>
      {/* input */}
      <h2
        style={{
          marginBottom: '16px',
          paddingBottom: '8px',
          borderBottom: '1px solid #dddddd',
          fontWeight: '600',
          fontSize: '18px',
        }}
      >
        Input
      </h2>
      <ul style={{ padding: '0 15px' }}>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <p style={{ width: '210px', color: '#444444' }}>Basic</p>
          <CmBasicInput></CmBasicInput>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <p style={{ width: '210px', color: '#444444' }}>
            Use Placeholder 사용
          </p>
          <CmBasicInput placeholder="아이디"></CmBasicInput>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <p style={{ width: '210px', color: '#444444' }}>Error</p>
          <CmBasicInput isError></CmBasicInput>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <p style={{ width: '210px', color: '#444444' }}>Use Reset Button</p>
          <CmBasicInput isReset></CmBasicInput>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <p style={{ width: '210px', color: '#444444' }}>
            Use password Open Button
          </p>
          <CmBasicInput type="password" isSecret></CmBasicInput>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <p style={{ width: '210px', color: '#444444' }}>
            넘버 타입의 인풋일 경우
          </p>
          {/* <CmNumberInput></CmNumberInput> */}
          element plus 사용
        </li>
      </ul>
    </div>
  )
}
