import { JsonSchemaViewer } from '@stoplight/json-schema-viewer'
import './SchemaViewerPage.scss'
import { useState } from 'react'

const SchemaViewerPage = () => {
  const [input, setInput] = useState('')
  const [schema, setSchema] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    setSchema(JSON.parse(input))
  }

  return (
    <div className="schema-viewer-page">
      <div className="six columns panel">
        <form onSubmit={handleSubmit}>
          <label htmlFor="schemaInput">JSON Schema</label>
          <textarea
            className="u-full-width"
            id="schemaInput"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <input className="button-primary" type="submit" value="Submit" />
        </form>
      </div>

      <div className="six columns panel">
        <JsonSchemaViewer
          name="JSON Schema"
          schema={schema}
          expanded={true}
          hideTopBar={false}
          emptyText="No schema defined"
          defaultExpandedDepth={0}
        />
      </div>
    </div>
  )
}

export default SchemaViewerPage
