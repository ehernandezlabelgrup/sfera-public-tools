import React from 'react'
import '../../../../styles/index.css'
import SearchInputArrow from './SearchInputArrow'

export default {
  title: 'components/SearchInputArrow',
  component: SearchInputArrow,
}

const Template = (args) => <SearchInputArrow {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Search',
}

export const Transparent = Template.bind({})
Transparent.args = {
  placeholder: 'Search',
  transparent: true,
}

export const Search = Template.bind({})
Search.args = {
  placeholder: 'Search',
  transparent: true,
  icon: 'search',
}

export const Filter = Template.bind({})
Filter.args = {
  placeholder: 'Filter',
  transparent: true,
  icon: 'filter',
}
