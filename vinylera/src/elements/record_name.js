import './record_name.css'
import record from './transparent_vinyl_only.png'

function RecordName({name}) {
  return (      
    <div className="record-label">
      <img className="record" src={record} alt="a cartoon, neon-lined vinyl" />
      <h1 className="label">{name}</h1>
    </div>
  )
}

export default RecordName;