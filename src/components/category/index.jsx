import React from 'react'

import { rhythm } from '../../utils/typography'
import { CATEGORY_TYPE } from '../../constants'

import './index.scss'

export const Category = ({ category, selectCategory, currentCategory }) => {
  return (
    <ul
      className="category-container"
      role="tablist"
      id="category"
      style={{
        margin: `0 -${rhythm(3 / 4)}`,
      }}
    >
      <li
        className={
          currentCategory === CATEGORY_TYPE.ALL ? 'item selected' : 'item'
        }
      >
        <a href="" onClick={e => selectCategory(e, CATEGORY_TYPE.ALL)}>
          All
        </a>
      </li>
      {category.map((item, idx) => (
        <li
          key={idx}
          className={currentCategory === item ? 'item selected' : 'item'}
        >
          <a href="#" onClick={e => selectCategory(e, item)}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  )
}
