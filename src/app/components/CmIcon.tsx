export default function CmIcon(props: {
  name: string
  alt?: string
  type?: string
  width?: string
  height?: string
  style?: string
}) {
  const { name, alt, type = 'svg', width, height } = props
  return (
    <img
      src={`/icons/${name}.${type}`}
      alt={alt}
      style={{
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto',
      }}
    ></img>
  )
}
