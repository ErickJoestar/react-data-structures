import React, { useState, useEffect } from 'react'

import {
  Array1D,
  Array2D,
  MapStructure,
  Queue,
  Stack,
  Tree
} from 'react-data-structures'

import 'react-data-structures/dist/index.css'

const TREE = {
  value: 12,
  style: { color: 'red' },
  id: 0,
  children: [
    {
      value: 23,
      id: 1,
      left: { value: 22, id: 2 },
      right: { value: 0, id: -1, left: { value: 0, id: -2 } }
    },
    {
      value: 23,
      id: 3,
      left: { value: 22, id: 4 },
      right: {
        value: 22,
        id: 4,
        children: [
          {
            value: 12,
            style: { color: 'red' },
            id: 0,
            children: [
              { value: 23, id: 1, left: { value: 22, id: 2 } },
              {
                value: 23,
                id: 3,
                left: { value: 22, id: 4 },
                right: { value: 22, id: 4 }
              }
            ]
          }
        ]
      }
    }
  ]
}

const options = { width: 800, height: 600 }

const App = () => {
  return (
    <main className='main'>
      <div className='container'>
        <Tree root={TREE} options={options} />
      </div>
      <div className='container'>
        <Array1D elements={[1, 2, 3, 4, 4, 5]} select={{ index: 1 }} />
      </div>
      <div className='container'>
        <Array2D
          elements={[
            [1, 2],
            [3, 4]
          ]}
          select={{ index: [1, 1], style: {} }}
        />
      </div>
      <div className='container'>
        <MapStructure
          elements={[
            { keyValue: 1, value: 2 },
            { keyValue: 1, value: 2 },
            { keyValue: 1, value: 2 },
            { keyValue: 1, value: 2 }
          ]}
          select={1}
        />
      </div>
      <div className='container'>
        <Queue elements={[1, 2, 3, 4, 5]} />
      </div>
      <div className='container'>
        <Stack
          elements={[1, 2, 3, 4, { value: 5 }]}
          options={{
            elementsToShow: 2,
            topIndexLabel: 'aaa',
            rearIndexLabel: 'asdasdasd'
          }}
        />
      </div>
    </main>
  )
}

export default App
