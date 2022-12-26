import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function Loading() {
    
  return (
    <div className="loading-wrapper">
        <FontAwesomeIcon icon={faSpinner} width={100} />
    </div>
  )
}
