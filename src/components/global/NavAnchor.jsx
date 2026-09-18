


export default function NavAnchor({ height, id }) {
  return (
    <div id={id} style={{
      height: `${height}vh`,
      marginTop: `-${height}vh`
    }}/>
  )
}