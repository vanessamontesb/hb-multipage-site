import template from './example.pug'
import './example.scss'
import data from '../data/example.json'

export default class Example {
  constructor (node) {
    this.node = node
    this.node.innerHTML = template(data)
  }
}
